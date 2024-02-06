"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardBlock from "./cardblock";

const IconSection = () => {
  return (
    <section id="icon" className="lg:pt-16 lg:pb-0">
      <div className="container mt-18 mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_22.666666%)]  flex justify-center place-items-center w-full">
          <CardBlock
            content={"互聯網軟件開發、應用開發、移動應用開發"}
            img={"./images/ui/icon1.png"}
          />
          <CardBlock
            img={"./images/ui/icon2.png"}
            content={"資訊科技咨詢和服務"}
          />
          <CardBlock
            img={"./images/ui/icon3.png"}
            content={"雲計算、大數據、人工智能等技術研發和應用"}
          />
          <CardBlock
            img={"./images/ui/icon4.png"}
            content={"互聯網金融、電子支付、數字貨幣等相關業務"}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_25.666666%)]  flex justify-center place-items-center w-full">
          <CardBlock
            img={"./images/ui/icon5.png"}
            content={"物聯網、智能硬件等相關產品的研發和生產"}
          />
          <CardBlock img={"./images/ui/icon6.png"} content={"區塊鏈技術研發"} />
          <CardBlock img={"./images/ui/icon7.png"} content={"數字化轉型服務"} />
        </div>
      </div>
    </section>
  );
};

export default IconSection;
