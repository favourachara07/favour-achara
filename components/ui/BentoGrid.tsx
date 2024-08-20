import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
    //old: grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* cn is for dynamic classes */}
      <div className={`${id === 6 && "flex justify-center h-full"}`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              width={500}
              height={500}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              width={500}
              height={500}
              alt={spareImg}
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans text-lg font-bold lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        
        {id===2 && <GlobeDemo />}

        {id===3 && (
          // changed - right to + right
          <div className="flex gap-1 lg:gap-5 w-fit absolute right-1 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['React.js','Next.js','TS'].map((item)=>(
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"> {item}</span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
              {['Java','Python','TS'].map((item)=>(
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"> {item}</span>
              ))}

            </div>
          </div>
          
        )}
        </div>
      </div>
    </div>
  );
};
