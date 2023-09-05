"use client"
import { Avatar, Button } from "@nextui-org/react"

export const CategoryWelcome = () => {
    return <div
        className="basis-3/12 bg-[url(https://ae01.alicdn.com/kf/He1ffbc1d340f4be8a0a6d07641c58180t.png_.webp)] w-full h-full p-[15px] box-border rounded-[8px] [background-size:240px_101px] bg-no-repeat bg-[#fff] overflow-hidden 
        flex flex-col items-center gap-2
        ">
        <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-16 h-16 mt-5 " />
        <div className="text-medium font-bold">
            Bienvenido a AliNext
        </div>
        <div className="w-full my-4 flex justify-between">
            <Button color="default" className="bg-[linear-gradient(94deg,#ff0a0a,#ff7539)] text-[#fff] inline-block w-[98px] h-[36px] leading-[36px] text-sm font-bold text-center rounded-[18px] cursor-pointer">
                Registrar
            </Button>
            <Button color="default" className="bg-[#f5f5f5] text-[#222] inline-block w-[98px] h-[36px] leading-[36px] text-sm font-bold text-center rounded-[18px] cursor-pointer">
                Iniciar
            </Button>
        </div>
        <div
            className="bg-[url(https://ae01.alicdn.com/kf/H4d81c0b772ad404b9acc330f16c6165dO.png_.webp)] bg-[rgb(245,_245,_245)] flex flex-col w-full h-[270px] bg-cover rounded-[6px] cursor-pointer text-white px-2 py-3 relative"
        >
            <div className="overflow-hidden text-[13px] leading-[18px] m-0 font-normal">
                Tu guía de compra favorita
            </div>
            <div className="pt-[10px] font-bold text-base leading-[20px] mb-6">
                Descubre las últimas novedades
            </div>
            <div className="absolute bottom-0 mb-2">
                <div className="w-full relative overflow-hidden ">
                    <div className="flex gap-1 w-full">
                        <div
                            className="bg-[url(https://ae04.alicdn.com/kf/Sf8d8d1cb6ac04e5bae8535bdb455d606s.jpg_100x100Q90.jpg_.webp)] w-[92px] h-[92px] bg-[rgb(245,_245,_245)] bg-cover rounded-[6px] cursor-pointer
                            flex justify-center items-end
                            "
                        >
                            <Button color="default" className="max-w-full h-[20px] px-[8px] py-[0] overflow-hidden font-bold text-xs leading-[20px] whitespace-nowrap overflow-ellipsis bg-[linear-gradient(94deg,#ff0a0a,#ff7539)] rounded-[10px] text-white mb-1">
                                PEN 56,23
                            </Button>
                        </div>
                        <div
                            className="bg-[url(https://ae04.alicdn.com/kf/Sf8d8d1cb6ac04e5bae8535bdb455d606s.jpg_100x100Q90.jpg_.webp)] w-[92px] h-[92px] bg-[rgb(245,_245,_245)] bg-cover rounded-[6px] cursor-pointer
                            flex justify-center items-end
                            "
                        >
                            <Button color="default" className="max-w-full h-[20px] px-[8px] py-[0] overflow-hidden font-bold text-xs leading-[20px] whitespace-nowrap overflow-ellipsis bg-[linear-gradient(94deg,#ff0a0a,#ff7539)] rounded-[10px] text-white mb-1">
                                PEN 56,23
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}