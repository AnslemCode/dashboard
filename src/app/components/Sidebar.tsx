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
  MdMoreVert,
  MdSupervisedUserCircle,
} from "react-icons/md";
import SidebarItem from "./SidebarItem";

const menuItems = [
  { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
  {
    title: "Transactions",
    path: "/dashboard/transactions",
    icon: <MdAttachMoney />,
  },
  {
    title: "Settlements",
    path: "/dashboard/settlements",
    icon: <FaMoneyCheckAlt />,
  },
  { title: "Refunds", path: "/dashboard/refunds", icon: <FaRegMoneyBillAlt /> },
  { title: "Payments", path: "/dashboard/payments", icon: <MdAttachMoney /> },
  { title: "Cards", path: "/dashboard/cards", icon: <FaCreditCard /> },
  { title: "Account", path: "/dashboard/account", icon: <AiOutlineSetting /> },
  {
    title: "Manage Bills",
    path: "/dashboard/manage-bills",
    icon: <FaRegMoneyBillAlt />,
  },
  { title: "Ojah", path: "/dashboard/ojah", icon: <MdSupervisedUserCircle /> },
];

const footerItem = [
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <FaRegMoneyBillAlt />,
  },
  {
    title: "Contact us",
    path: "/dashboard/contact-us",
    icon: <MdSupervisedUserCircle />,
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-[#FAFAFA]">
      <div className="flex items-center gap-2 bg-white border border-[#E2E3E5] rounded-xl p-4">
        <MdAccountCircle className="w-[42px] h-[42px] text-purple-500" />
        <div className="flex-1">
          <span className="block font-medium text-[16px] text-[#343433] overflow-hidden whitespace-nowrap text-ellipsis">
            Payshiga Technologies
          </span>
          <span className="block text-xs text-[#99999C]">
            Business ID: 09387465
          </span>
        </div>
        <MdMoreVert className="text-gray-400 text-2xl" />
      </div>

      <div className="flex-grow mt-4">
        {menuItems.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </div>

      <div className="mt-auto">
        {footerItem.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
