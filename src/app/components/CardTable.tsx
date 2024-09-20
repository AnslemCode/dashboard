import React from "react";
import { MdArrowRight } from "react-icons/md";
import CardTableItem from "./CardTableItem";

const CardTable = () => {
  return (
    <div className="flex flex-col w-[45%]">
      <div className="flex items-center justify-between">
        <h1 className="font-normal text-[26px] text-[#343433]">Cards</h1>
        <div className="flex items-center gap-2 border border-[#E2E3E5] rounded-[10px] py-[6px] px-2">
          <span className="text-[#343433] text-[14px]">See All</span>
          <span>
            <MdArrowRight />
          </span>
        </div>
      </div>
      <hr className="border-t border-gray-100 my-4" />
      <div>
        <CardTableItem status="Locked" />
        <hr className="border-t border-gray-100 my-2" />
        <CardTableItem status="Active" />
        <hr className="border-t border-gray-100 my-2" />
        <CardTableItem status="Active" />
        <hr className="border-t border-gray-100 my-2" />
        <CardTableItem status="Locked" />
        <hr className="border-t border-gray-100 my-2" />
        <CardTableItem status="Locked" />
      </div>
    </div>
  );
};

export default CardTable;
