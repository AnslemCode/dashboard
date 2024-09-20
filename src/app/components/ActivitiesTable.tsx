import React from "react";
import { BsArrowDownLeftCircle, BsArrowUpRightCircle } from "react-icons/bs";
import { MdArrowRight } from "react-icons/md";
import { TiArrowSync } from "react-icons/ti";
import Image from "next/image";
import MTN from "../../../public/mtn-new-logo.svg";
import GTB from "../../../public/gtbank-seeklogo.svg";

const ActivitiesTable = () => {
  return (
    <div className="flex flex-col w-[45%]">
      <div className="flex items-center justify-between">
        <h1 className="font-normal text-[26px] text-[#343433]">
          Recent Activities
        </h1>
        <div className="flex items-center gap-2 border border-[#E2E3E5] rounded-[10px] py-[6px] px-2">
          <span className="text-[#343433] text-[14px]">See All</span>
          <span>
            <MdArrowRight />
          </span>
        </div>
      </div>
      <hr className="border-t border-gray-100 my-4" />
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={MTN} alt="MTN Icon" className="w-6 h-6 rounded-full" />
            <div className="flex flex-col">
              <span className="text-[#99999C] text-xs">Bill payment for</span>
              <span className="text-[#343433] font-medium">
                MTN Airtime top up
              </span>
            </div>
          </div>
          <div className="text-[#00C46C]">+5,500 NGN</div>
        </div>
        <hr className="border-t border-gray-100 my-2" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={GTB}
              alt="GTBank Icon"
              className="w-6 h-6 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-[#99999C] text-xs">Payment to bank</span>
              <span className="text-[#343433] font-medium">
                Oluwatobi Oseni
              </span>
            </div>
          </div>
          <div className="text-[#00C46C]">+5,500 NGN</div>
        </div>
        <hr className="border-t border-gray-100 my-2" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BsArrowUpRightCircle className="w-[30px] h-[32px] text-[#343433]" />
            <div className="flex flex-col">
              <span className="text-[#99999C] text-xs">Payment to</span>
              <span className="text-[#343433] font-medium">
                Oluwatobi Oseni
              </span>
            </div>
          </div>
          <div className="text-[#343433]">550 TZS</div>
        </div>
        <hr className="border-t border-gray-100 my-2" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <TiArrowSync className="w-[30px] h-[32px] text-[#343433]" />
            <div className="flex flex-col">
              <span className="text-[#99999C] text-xs">Currency Swap from</span>
              <span className="text-[#343433] font-medium">NGN &gt; GBP</span>
            </div>
          </div>
          <div className="text-[#00C46C]">+500 GBP</div>
        </div>
        <hr className="border-t border-gray-100 my-2" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BsArrowDownLeftCircle className="w-[30px] h-[32px] text-[#343433]" />
            <div className="flex flex-col">
              <span className="text-[#99999C] text-xs">Received from bank</span>
              <span className="text-[#343433] font-medium">
                Oluwatobi Oseni
              </span>
            </div>
          </div>
          <div className="text-[#00C46C]">+5,500 NGN</div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesTable;
