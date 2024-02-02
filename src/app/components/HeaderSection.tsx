"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkBtn from "./LinkBtn";

const HeaderSection = () => {
  return (
    <div className=" container mx-auto mt-24 py-4 px-4 flex">
      <div className="bg-[#0D123B] flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:flex-row">
        <div className="bg-[#0D123B] flex flex-col justify-start p-6 col-span-8 place-self-center text-center sm:text-left ">
          <h5 className="mb-6 text-2xl font-medium text-neutral-800 dark:text-neutral-50">
            為您提升企巢效益、促進成交
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            巨集科技有限公司是澳門一家致力於創新科技領域的企業。我們提供多項尖端技術和服務，以滿足客戶的不同需求。我們的團隊具有豐富的軟件開發經驗，致力於為客戶打造高效、安全且易用的應用程序。
          </p>
          <p className="mb-6 text-base text-neutral-600 dark:text-neutral-200">
            我們的專業顧問團隊為客戶提供全面的IT咨詢，幫助客戶制定有效的科技戰略和解決方案。
          </p>
          <div className="text-neutral-500 dark:text-neutral-300">
            <LinkBtn title={"聯絡我們"} url={"/#contact"} />
          </div>
        </div>
        <img
          className="h-[320px] w-full rounded-r-lg object-cover md:rounded-none md:rounded-r-lg"
          src={"./images/ui/header.jpg"}
          alt=""
        />
      </div>

      {/* <section className="flex">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className="lg:w-[650px] lg:h-[650px] relative w-[250px] h-[250px]">
              <Image
                src="/images/bg.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="ml-0 lg:ml-32 col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white mb-4 text-2xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                致力為您
              </span>
              <br></br>
              <span>思考出最有效率的方案</span>
              <br></br>
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-sm mb-6 lg:text-lg">
              客製化網站、套版網站、內部系統以及APP開發都是我們可以服務的範圍。我們致力於思考如何從使用者的角度出發，和您一起打造最佳的體驗！
            </p>
            <div>
              <Link
                href="/#about"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >
                了解更多
              </Link>
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  資訊
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HeaderSection;
