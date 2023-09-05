"use client"

export const ItemListCategory = ({ children, bgPosition }: any) => {

    return <div className="relative hover:bg-[#f2f2f2] cursor-pointer hover:border-l-1 hover:border-[#cccccc] hover:text-[#ff472e] hover:font-bold hover:text-medium max-w-full ">
        <div className="pl-3 py-2 flex gap-1 items-center  max-w-full">
            <div
                className={`bg-[url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png)] ${bgPosition} bg-no-repeat w-[24px] h-[24px] self-center`}
            />
            <div className="truncate">
                {children}
            </div>
        </div>
    </div>
}