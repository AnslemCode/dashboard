"use client";
import { useState } from "react";
import { MdArrowDownward, MdArrowUpward, MdMoreVert } from "react-icons/md";
import { Tooltip, IconButton } from "@mui/material";
import { Info } from "@mui/icons-material";

const CustomTooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        // backgroundColor: "#282828",
        color: "#fff",
        padding: "8px",
        borderRadius: "4px",
        maxWidth: "150px",
        lineHeight: "1.5",
      }}
    >
      {children}
    </div>
  );
};

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");

  const currencies = ["NGN", "CAD", "DOL", "EUR"];

  return (
    <div className="flex space-x-2">
      {currencies.map((currency) => (
        <button
          key={currency}
          onClick={() => setSelectedCurrency(currency)}
          className={`rounded-md p-2 ${
            selectedCurrency === currency
              ? "bg-[#343433] text-white px-4 py-[11px] rounded-[100px]"
              : "bg-white text-[#343433]"
          }`}
        >
          {currency}
        </button>
      ))}
    </div>
  );
};

const CurrencyInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <CurrencySelector />

        <div className="flex items-center gap-4">
          <button className="text-[#ffffff] bg-[#625BF6] flex items-center py-[11px] px-4 rounded-xl font-normal text-[17px]">
            Add Money
          </button>
          <button className="text-[#343433] flex items-center border border-[#E2E3E5] py-[11px] px-4 rounded-xl font-normal text-[17px]">
            Send Money
          </button>
          <button className="text-[#343433] flex items-center border border-[#E2E3E5] p-[9px] rounded-lg font-normal text-[17px]">
            <MdMoreVert className="text-gray-400 text-2xl" />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12">
        <div className="flex flex-col">
          <div className="flex items-center gap-1 font-medium text-[16px] text-[#99999C]">
            <p>Avaliable Balance</p>
            <Tooltip
              title={
                <CustomTooltip>
                  <div>Total wallet balance for a</div>
                  <div>selected currency on</div>
                  <div>your business account.</div>
                </CustomTooltip>
              }
              placement="top"
              arrow
              enterDelay={500}
              leaveDelay={200}
            >
              <IconButton>
                <Info />
              </IconButton>
            </Tooltip>
          </div>
          <h1 className="font-semibold text-[32px] mt-4">NGN 1,000,000</h1>
          <div className="flex items-center gap-1 text-[#00C46C] font-medium text-[16px]">
            <span>
              <MdArrowUpward />
            </span>
            <p>20% Past Day</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1 font-medium text-[16px] text-[#99999C]">
            <p>Total Transactions </p>
            <Tooltip
              title={
                <CustomTooltip>
                  <div>Count of transactions</div>
                  <div>attempts initiated on</div>
                  <div>your business account.</div>
                </CustomTooltip>
              }
              placement="top"
              arrow
              enterDelay={500}
              leaveDelay={200}
            >
              <IconButton>
                <Info />
              </IconButton>
            </Tooltip>
          </div>
          <h1 className="font-semibold text-[32px] mt-4">345</h1>
          <div className="flex items-center gap-1 text-[#00C46C] font-medium text-[16px]">
            <span>
              <MdArrowUpward />
            </span>
            <p>20% Past Day</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1 font-medium text-[#99999C] text-[16px]">
            <p>Total Settlements</p>
            <Tooltip
              title={
                <CustomTooltip>
                  <div>Total payouts made into</div>
                  <div>your business settlement</div>
                  <div>account.</div>
                </CustomTooltip>
              }
              placement="top"
              arrow
              enterDelay={500}
              leaveDelay={200}
            >
              <IconButton>
                <Info />
              </IconButton>
            </Tooltip>
          </div>
          <h1 className="font-semibold text-[32px] mt-4">NGN 49,000,000</h1>
          <div className="flex items-center gap-1 text-[#FF4E4E] font-medium text-[16px]">
            <span>
              <MdArrowDownward />
            </span>
            <p>20% Past Day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyInfo;
