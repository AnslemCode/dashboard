import ActivitiesTable from "./components/ActivitiesTable";
import CardTable from "./components/CardTable";
import CurrencyInfo from "./components/CurrencyInfo";
import MoneyBarChart from "./components/MoneyBarChart";

export default function Home() {
  return (
    <div className="flex flex-col p-12">
      <div className="flex items-center justify-between">
        <h1 className="text-[48px] font-normal leading-9">
          Good Afternoon, Osaretin
        </h1>
        <p className="text-[16px] font-medium leading-5 text-[#99999C]">
          Monday, January 23, 2023
        </p>
      </div>
      <div className="h-px bg-gray-300 my-8" />
      <CurrencyInfo />
      <div className="h-px bg-gray-300 my-8" />
      <MoneyBarChart />
      <div className="h-px bg-gray-300 my-8" />
      <div className="flex justify-between w-full">
        <CardTable />
        <div className="border-l h-auto mx-4 border-gray-200" />
        <ActivitiesTable />
      </div>
    </div>
  );
}
