"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <CgSpinner className="animate-spin text-5xl text-[#5540EB]" />
    </div>
  );
};

export default page;
