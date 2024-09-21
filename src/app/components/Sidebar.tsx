import { AiOutlineSetting } from "react-icons/ai";
import {
  FaCreditCard,
  FaMoneyCheckAlt,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import {
  MdAccountCircle,
  MdAttachMoney,
  MdDashboard,
  MdSupervisedUserCircle,
} from "react-icons/md";
import SidebarItem from "./SidebarItem";
import { LuChevronsUpDown } from "react-icons/lu";

const menuItems = [
  { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
  {
    title: "Transactions",
    path: "/transactions",
    icon: <MdAttachMoney />,
  },
  {
    title: "Settlements",
    path: "/settlements",
    icon: <FaMoneyCheckAlt />,
  },
  { title: "Refunds", path: "/refunds", icon: <FaRegMoneyBillAlt /> },
  { title: "Payments", path: "/payments", icon: <MdAttachMoney /> },
  { title: "Cards", path: "/cards", icon: <FaCreditCard /> },
  { title: "Account", path: "/account", icon: <AiOutlineSetting /> },
  {
    title: "Manage Bills",
    path: "/manage-bills",
    icon: <FaRegMoneyBillAlt />,
  },
  { title: "Ojah", path: "/ojah", icon: <MdSupervisedUserCircle /> },
];

const footerItem = [
  {
    title: "Settings",
    path: "/settings",
    icon: <FaRegMoneyBillAlt />,
  },
  {
    title: "Contact us",
    path: "/contact-us",
    icon: <MdSupervisedUserCircle />,
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-[#FAFAFA]">
      <div className="flex items-center justify-center gap-1 bg-white border border-[#E2E3E5] rounded-xl py-4 px-2 max-w-[238px]">
        <MdAccountCircle
          className="text-[#625BF6] w-[42px] h-[42px] flex-shrink-0"
          fill="#625BF6"
        />
        <div className="flex flex-col gap-1">
          <span className="font-medium text-[16px] text-[#343433] overflow-hidden whitespace-nowrap text-ellipsis max-w-[140px]">
            Payshiga Technologies
          </span>
          <span className="text-xs text-[#99999C]">Business ID: 09387465</span>
        </div>
        <LuChevronsUpDown className="text-[#9d9d9d] w-[24px] h-[24px] flex-shrink-0" />
      </div>

      <div className="flex-grow mt-4">
        {menuItems.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </div>

      <div className="mt-auto py-4">
        {footerItem.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
