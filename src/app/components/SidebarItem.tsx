"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  item: {
    path: string;
    icon: JSX.Element;
    title: string;
  };
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;
  return (
    <Link
      href={item.path}
      className={`flex items-center gap-[10px] p-[10px] my-[5px] ${
        isActive ? "text-[#5540EB]" : "text-[#99999C]"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default SidebarItem;
