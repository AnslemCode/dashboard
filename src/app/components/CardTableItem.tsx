import React from "react";
import { RiBankCard2Fill } from "react-icons/ri";

interface CardTableItemProps {
  status: "Locked" | "Active"; // prop to determine the status of the card
}

const CardTableItem = ({ status }: CardTableItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <RiBankCard2Fill className="w-[30px] h-[32px] text-[#343433]" />
        <div className="flex flex-col">
          <span className="text-[#343433] font-medium">Card Label</span>
          <span className="text-[#99999C] text-xs">*** 8594</span>
        </div>
      </div>
      <div
        className={`${
          status === "Active"
            ? "text-[#00C46C] border border-[#DCFAEC]"
            : "text-[#FF9900] border border-[#FF9900]"
        } py-1 px-[6px] rounded-[6px] text-[12px]`}
      >
        {status}
      </div>
    </div>
  );
};

export default CardTableItem;
