import Image from "next/image";
import IconTitle from "./iconTitle";

const StaticLogoSection = () => {
  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <section id="logo">
        <IconTitle title="合作夥伴" />
        <div className="pt-2 pb-2 mb-[200px]">
          <div className="flex overflow-hidden space-x-16 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_26.666666%)] justify-center place-items-center w-full">
              <Image
                loading="lazy"
                src="/images/logo.tencent.svg"
                height={330}
                width={330}
                className="max-w-none w-[160px] lg:w-[230px] mb-12"
                alt="Image 1"
              />
              <Image
                loading="lazy"
                src="/images/grantit.jpg"
                height={180}
                width={280}
                className="max-w-none  w-[160px] lg:w-[230px] mb-12"
                alt="Image 4"
              />
              <Image
                loading="lazy"
                src="/images/feie.png"
                height={80}
                width={230}
                className="max-w-none  w-[160px] lg:w-[230px] mb-12"
                alt="Image 5"
              />
            </div>
          </div>
        </div>

        <IconTitle title="尊貴客戶" />
        <div className="pt-2 pb-2">
          <div className="flex overflow-hidden space-x-16 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_26.666666%)] justify-center place-items-center w-full">
              <Image
                loading="lazy"
                src="/images/fortune.png"
                height={180}
                width={180}
                className="max-w-none mb-12"
                alt="Image 2"
              />
              <Image
                loading="lazy"
                src="/images/heshi.png"
                height={180}
                width={180}
                className="max-w-none mb-12"
                alt="Image 3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaticLogoSection;
