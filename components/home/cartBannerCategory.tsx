"use client"
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"


export const CartBannerCategory = ({ item }: any) => {
    return <Card shadow="sm" isPressable className="outline-[none] w-[113px]">
        <CardBody className="overflow-visible relative p-2 flex flex-row justify-center items-start">

            <Image
                shadow="sm"
                radius="lg"
                width="101px"
                alt={item.title}
                className="w-full object-cover h-[101px]"
                src={item.img}
            />

        </CardBody>
        <CardFooter className="text-small overflow-hidden flex flex-row justify-center items-start">
            <b className="leading-[16px] text-[15px] overflow-ellipsis text-[rgba(0,0,0,.9)] text-center font-bold">{item.title}</b>
        </CardFooter>
        <div className="absolute top-[0] left-0 bg-[#fd384f] text-[#fff] w-[40px] h-[20px] leading-[20px] mt-2 ml-2 text-center text-xs z-20 rounded-tl-[6px] rounded-br-[6px] rounded-tr-[0] rounded-bl-[0] font-bold">
            {item.price}
        </div>
    </Card>
}