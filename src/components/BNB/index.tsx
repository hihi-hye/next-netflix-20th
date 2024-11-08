import { ElementType } from "react";
import { usePathname } from "next/navigation";

import ComingSoonIcon from "@/assets/ComingSoonIcon";
import DownloadsIcon from "@/assets/DownloadsIcon";
import HomeIcon from "@/assets/HomeIcon";
import MoreIcon from "@/assets/MoreIcon";
import SearchIcon from "@/assets/SearchIcon";
import { Container, MenuItemWrapper, Text } from "./styles";

interface Menu {
  title: string;
  icon: ElementType;
  href: string;
}

const MENU_LIST = [
  { title: "Home", icon: HomeIcon, href: "/home" },
  { title: "Search", icon: SearchIcon, href: "/search" },
  { title: "Coming Soon", icon: ComingSoonIcon, href: "/soon" },
  { title: "Downloads", icon: DownloadsIcon, href: "/download" },
  { title: "More", icon: MoreIcon, href: "/more" },
];

function Menu({ data }: { data: Menu }) {
  const { title, href } = data;
  const pathname = usePathname();

  return (
    <MenuItemWrapper href={href}>
      <div>
        <data.icon isActive={pathname === href} />
      </div>
      <Text isActive={pathname === href}>{title}</Text>
    </MenuItemWrapper>
  );
}

export default function BNB() {
  return (
    <Container>
      {MENU_LIST.map((menu) => (
        <Menu key={menu.title} data={menu} />
      ))}
    </Container>
  );
}
