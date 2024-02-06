"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const IconTitle = ({ title }: any) => {
  return (
    <div className=" mt-4 mb-8 md:mb-12 flex justify-center content-center">
      <Image
        width={60}
        height={60}
        className="inline mr-4 w-[60px]"
        src="/images/ui/LOGO2.png"
        alt=""
      />
      <h2 className="text-center text-[32px] font-bold text-white lg:text-[40px]">
        {title}
      </h2>
    </div>
  );
};

export default IconTitle;
