export default function MoreIcon({ isActive = false }: { isActive?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4V7.4H22V4H1ZM1 10.8V14.2H22V10.8H1ZM1 17.6V21H22V17.6H1Z"
        fill={isActive ? "#ffffff" : "#8C8787"}
      />
    </svg>
  );
}
