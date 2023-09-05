import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Image } from "@nextui-org/image"
export const CategorySlider = () => {
    return <div className="basis-7/12 relative group rounded-lg cursor-pointer">
        <div>
            <Image
                width={840}
                height={500}
                className="relative pointer-events-none"
                alt="NextUI hero Image"
                src="https://ae01.alicdn.com/kf/S3355d2ca703d4661999bb79569a392f4o.png_.webp"
            />
        </div>
        <div
            className="
                z-10
                absolute
                top-2/4 
                left-0
                transform 
                -translate-y-1/2 
                [transition:all_.4s_ease-in-out] 
                text-[0] 
                leading-[0] 
                w-[30px] 
                h-[50px] 
                bg-[rgba(0,0,0,.25)]
                hidden
                group-hover:flex
                justify-center
                items-center    
            "
        >
            <IoIosArrowBack size={30} className="text-white"></IoIosArrowBack>
        </div>
        <div
            className="
                z-10
                absolute
                top-2/4 
                right-0
                transform 
                -translate-y-1/2 
                [transition:all_.4s_ease-in-out] 
                text-[0] 
                leading-[0] 
                w-[30px] 
                h-[50px] 
                bg-[rgba(0,0,0,.25)]
                hidden
                group-hover:flex
                justify-center
                items-center    
            "
        >
            <IoIosArrowForward size={30} className="text-white"></IoIosArrowForward>
        </div>

        <div className="absolute z-10 bottom-0 mb-3 left-2/4 transform -translate-x-1/2">
            <div className="relative flex flex-row gap-1">
                <div className="w-[14px] h-[8px]  flex justify-center items-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
                </div>
                <div className="w-[14px] h-[8px]  flex justify-center items-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
                </div>
                <div className="w-[14px] h-[8px] flex justify-center items-center ">
                    <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
                </div>
                <div className="w-[14px] h-[8px]  flex justify-center items-center">
                    <div className="w-full h-[8px] rounded-full bg-[#ff472e]"></div>
                </div>
                <div className="w-[14px] h-[8px]  flex justify-center items-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
                </div>
                <div className="w-[14px] h-[8px]  flex justify-center items-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
                </div>
                <div className="w-[14px] h-[8px]  flex justify-center items-center">
                    <   div className="w-[8px] h-[8px] rounded-full bg-white"></div>
                </div>
            </div>
        </div>
    </div>
}