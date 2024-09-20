import Link from "next/link";

interface SidebarItemProps {
  item: {
    path: string;
    icon: JSX.Element;
    title: string;
  };
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  return (
    <Link
      href={item.path}
      className="flex items-center gap-[10px] p-[10px] my-[5px] text-[#99999C]"
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default SidebarItem;
