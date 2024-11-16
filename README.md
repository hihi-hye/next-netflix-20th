# 6주차 미션: Next-Netflix

# 결과물

- [베포 링크](https://next-netflix-20th-five.vercel.app/)

# Key Questions

### 무한 스크롤과 `Intersection Observer API`의 특징에 대해 알아봅시다.

무한 스크롤
무한 스크롤은 스크롤을 무한으로 할 수 있는 기능이다.
페이지 최하단에 도달했을 때 신규 콘텐츠를 로드하는 식으로 무한 스크롤이 구성된다.
이 전에는 페이지네이션을 활용해 콘텐츠를 확인하는 방식을 사용했다.

무한스크롤의 장점 : 별도의 추가 동작이 필요하지 않음. 
무한스크롤의 단점  : 한 페이지 내에 많은 콘텐츠가 로드 되므로, 페이지 성능이 느려진다. 많은 컨텐츠 로드 후, 눈여겨봤던 콘텐츠로 다시 돌아가기 어렵다.

Intersection Oberserver API
해당 API는 무한 스크롤을 구현할 수 있도록 돕는다.
Intersection Oberserver(교차 관찰자)는 요소(Element)가 뷰포트(ViewPort)와 교차하고 있는 지 감지한다. 즉, 관찰 중인 요소가 사용자가 보는 화면 영역 내에 들어왔는 지 알려준다.

객체 생성
```js
new Intersection Observer(callback, options)
```
객체 생성 시 root(관찰 대상이 화면에 들어왔음을 감지하는 영역), rootMargin(감지 영역을 바깥 범위까지 확장), threshold(관찰 대상이 화면 내 얼마나 들어왔을 때 콜백 함수를 콜백할 지) 등의 값을 작성하면 된다.

### `tanstack query`의 사용 이유(기존의 상태 관리 라이브러리와는 어떻게 다른지)와 사용 방법(reactJS와 nextJS에서)을 알아봅시다.

tanstack query(이전 이름 : React Query)
웹 애플리케이션에서 데이터 가져오기, 캐싱 동기화 및 서버 상태 업데이트를 간편하게 만들어주는 리액트 라이브러리다.
즉, React에서 API 요청과 상태 관리를 쉽게 해주는 도구다.
React나 Next.js와 함께 사용하는 경우 서버에서 데이터를 효율적으로 가져오고 캐싱 및 동기화를 관리할 수 있게 해준다.


| 특징               | TanStackQuery              | 상태관리 라이브러리                      |
| ---------------- | -------------------------- | ------------------------------- |
| **사용 목적**        | 서버 상태 관리 (API 데이터 패칭, 캐싱)  | 클라이언트 상태 관리                     |
| **주요 기능**        | 데이터 패칭, 캐싱, 무효화, 동기화, 리트라이 | 애플리케이션의 전역 상태 관리                |
| **복잡성**          | 간단 (비동기 로직 추상화)            | 상태 및 비동기 로직 직접 구현 필요            |
| **리덕스 미들웨어 필요성** | 불필요                        | 필요 (예: Redux-Thunk, Redux-Saga) |
| **캐싱 지원**<br>    | 지원<br>                     | 직접 구현 필요<br>                    |

[ReactJS, Next.js에서의 사용]

ReactJS :
- CSR을 기본으로 동작하며, 데이터는 클라이언트에서 fetching

Next.js :
- SSR이나 SSG(Static-Site Generation)을 활용해 초기 상태를 서버에서 준비할 수 있다.
- Hydrate로 서버에서 패칭한 데이터를 클라이언트에 주입한다.

[사용 방법]

-  데이터 캐싱
	- 항상 쿼리 키를 지정해 데이터를 가져온다. 이 쿼리 키를 통해 캐시된 데이터를 사용할 지, 새로운 데이터를 가져올 지를 판단한다.
- 데이터의 신선도
	- 캐시한 데이터를 fresh | stale 상태로 구분해 관리한다.
	- fresh -> 데이터 사용
	- stale -> 서버에 다시 요청해 신선한 데이터를 가져온다.
	- staleTime : 데이터가 상하는 데까지 걸리는 시간
	- isStale : fresh | stale 판단
```tsx
import { useQuery } from '@tanstack/react-query' 
export default function DelayedData() { 
	const { data, isStale } = useQuery({ 
		queryKey: ['delay'], 
		queryFn: async () => (await fetch('https://api.heropy.dev/v0/delay?t=1000')).json(), 
		staleTime: 1000 * 10 // 10초 후 상함. 즉, 10초 동안 신선함. 
		}) 
	return ( <> 
		<div>데이터가 {isStale ? '상했어요..' : '신선해요!'}</div> 
		<div>{JSON.stringify(data)}</div> 
		</> ) 
}
```
### 기본적인 git add, commit, push, pull, merge, rebase 등의 명령어에 대해 알아봅시다(+ git branch 전략이나 다른 git 명령어도 좋습니다!)

**Git에서의 흐름**을 기준으로 git 명령어에 대해 설명한다.
1. **작업 디렉토리 (Working Directory)**:
    - 게 쓰인다.

|**특징**|**Merge**|**Rebase**|
|---|---|---|
|**히스토리**|병합 커밋 생성, 브랜치 구조 유지|히스토리가 직선으로 재배치됨|
|**커밋 내역 확인**|브랜치별 작업 흐름이 명확히 보임|히스토리가 깔끔하고 간단해짐|
|**협업 안전성**|충돌 관리가 비교적 쉬움|충돌 발생 시 작업 복잡도가 증가|
|**사용 사례**|협업 중 공유된 브랜치에서 병합 시 사용|개인 작업 정리 또는 feature 브랜치 정리 시 사용|
