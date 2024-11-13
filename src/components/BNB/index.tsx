import { ElementType } from 'react';
import { usePathname } from 'next/navigation';

import ComingSoonIcon from '@/assets/Menu_ComingSoonIcon';
import DownloadsIcon from '@/assets/Menu_DownloadsIcon';
import HomeIcon from '@/assets/Menu_HomeIcon';
import MoreIcon from '@/assets/Menu_MoreIcon';
import SearchIcon from '@/assets/Menu_SearchIcon';
import { Container, MenuItemWrapper, Text } from './styles';

interface Menu {
  title: string;
  icon: ElementType;
  href: string;
}

const MENU_LIST = [
  { title: 'Home', icon: HomeIcon, href: '/home' },
  { title: 'Search', icon: SearchIcon, href: '/search' },
  { title: 'Coming Soon', icon: ComingSoonIcon, href: '/soon' },
  { title: 'Downloads', icon: DownloadsIcon, href: '/download' },
  { title: 'More', icon: MoreIcon, href: '/more' },
];

function Menu({ data, isActive }: { data: Menu; isActive: boolean }) {
  const { title, href } = data;

  return (
    <MenuItemWrapper href={href}>
      <div>
        <data.icon isActive={isActive} />
      </div>
      <Text isActive={isActive}>{title}</Text>
    </MenuItemWrapper>
  );
}

export default function BNB() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <Container>
      {MENU_LIST.map((menu) => (
        <Menu key={menu.title} data={menu} isActive={pathname === menu.href} />
      ))}
    </Container>
  );
}
