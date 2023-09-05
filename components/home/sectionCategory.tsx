
import { BsListStars } from "react-icons/bs"
import { ItemListCategory } from "./itemListCategory"
import { CategoryWelcome } from "./categoryWelcome"
import { CategorySlider } from "./categorySlider"
import { CartBannerCategory } from "./cartBannerCategory"

export const SectionCategory = () => {
    const list = [
        {
            title: "Los más vendidos",
            img: "https://ae04.alicdn.com/kf/Sf2c2e97a36a947168f14f841c4272fa4R.jpg_120x120Q90.jpg_.webp",
            price: "-65%",
        },
        {
            title: "Tecnología",
            img: "https://ae04.alicdn.com/kf/Sb06deb92998a43a1bed41d732beedadff.jpg_120x120Q90.jpg_.webp",
            price: "-65%",
        },
        {
            title: "Hogar",
            img: "https://ae04.alicdn.com/kf/S9c1fe37010ec4fc28fabd81c7ff84c0cv.jpg_120x120Q90.jpg_.webp",
            price: "-65%",
        },
        {
            title: "Moda",
            img: "https://ae04.alicdn.com/kf/Sb2f3073b839e45faa82798679364547eW.jpg_120x120Q90.jpg_.webp",
            price: "-65%",
        }
    ];
    return <div className="mt-4 w-full h-full relative gap-2 flex">
        <div className="relative basis-[20%] max-w-[20%] ">
            <div className="bg-white shadow-md h-[550px] max-w-full rounded-lg flex flex-col">

                <div className="flex text-medium font-bold items-center basis-1/12 gap-2 px-3">
                    <BsListStars className="self-center" size={18}></BsListStars>
                    <div>
                        Categorías
                    </div>
                </div>

                <div className="basis-11/12">
                    <ItemListCategory bgPosition="bg-[0_-3780px]">
                        Moda mujer
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-2807px]">
                        Moda hombre
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-2999px]">
                        Telefonía y comunicaciones
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-675px]">
                        Informática, oficina, seguridad
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-763px]">
                        Electrónica
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-1697px]">
                        Bisutería, relojes
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-1449px]">
                        Hogar, mascotas y electrodomésticos
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-399px]">
                        Bolsos y calzado
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-1785px]">
                        Juguetes e infantil
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-3504px]">
                        Deporte y exterior
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-487px]">
                        Salud, belleza y peluquería
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-311px]">
                        Motor
                    </ItemListCategory>
                    <ItemListCategory bgPosition="bg-[0_-1571px]">
                        herramientas y Bricolaje
                    </ItemListCategory>
                </div>
            </div>
        </div>
        <div className="relative basis-[80%] flex flex-col">
            <div className="basis-1/12 w-full">
                <div className="flex items-center ml-2 gap-6 h-full space-x-4 text-medium font-bold">
                    <div className="cursor-pointer hover:text-[#ff472e]">Plus</div>
                    <div className="cursor-pointer hover:text-[#ff472e]">Cool Home Gadgets</div>
                    <div className="cursor-pointer hover:text-[#ff472e]">SuperOfertas</div>
                </div>
            </div>
            <div className="basis-11/12 w-full flex gap-2">
                <div className="basis-9/12 flex flex-col gap-2">
                    <CategorySlider />
                    <div className="basis-5/12 h-[190px]   
                    bg-[url(https://ae01.alicdn.com/kf/Sc09e21939442497990c76de0e1ba9d98u.png_.webp)] bg-cover [background-attachment:initial] [background-origin:initial] [background-clip:initial] bg-[rgb(249,_192,_69)]
                    flex flex-row justify-end gap-1 box-border px-[25px] 
                    py-[23px] overflow-hidden rounded-[8px]"
                    >
                        <CartBannerCategory item={list[0]} />
                        <CartBannerCategory item={list[1]} />
                        <CartBannerCategory item={list[2]} />
                        <CartBannerCategory item={list[3]} />
                    </div>
                </div>
                <CategoryWelcome></CategoryWelcome>
            </div>
        </div>
    </div >
}