"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardBlock from "./cardblock";

const ExampleSection = () => {
  return (
    <section id="icon" className="lg:pt-16 lg:pb-0">
      <div className="container mt-18 mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_26.666666%)] justify-center w-full">
          <CardBlock
            img={"./images/ui/pic2.png"}
            content={"電商及各類應用網站"}
          />
          <CardBlock img={"./images/ui/pic4.jpg"} content={"餐飲系統"} />
          <CardBlock
            img={"./images/ui/PIC3.png"}
            content={"手機應用APP/小程式開發"}
          />
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
