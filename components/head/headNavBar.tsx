export const HeadNavBar = () => {
    return <div className="relative bg-[#ffffff] h-[40px] w-full [border-bottom:1px_solid_#f2f2f2] text-xs">
        <div className="relative mr-auto ml-auto pl-0 pr-0 w-[1200px]">
            <div className="absolute right-[0] top-[0]">
                <div
                    className="float-left relative px-[4px] py-[0] after:content-[''] after:absolute after:top-[11px] after:right-[0] after:w-px after:h-[16px] after:overflow-hidden after:[border-right:1px_solid_#ccc]">
                    <div className="border-r-[0] p-0 relative float-left h-[39px] leading-[39px] ">
                        <span className="relative block pl-[10px] pr-[24px] py-[0] text-[#333] cursor-pointer leading-[39px] text-xs  hover:text-[#ff4747]
                        after:content-['*'] after:ml-0.5 after:text-red-500
                        ">
                            Vende en AliExpress
                        </span>
                    </div>
                </div>
                <div
                    className="float-left relative px-[4px] py-[0] after:content-[''] after:absolute after:top-[11px] after:right-[0] after:w-px after:h-[16px] after:overflow-hidden after:[border-right:1px_solid_#ccc]">
                    <div className="p-0 relative float-left h-[39px] leading-[39px]">
                        <span
                            className="relative block pl-[10px] pr-[24px] py-[0] text-[#333] cursor-pointer leading-[39px] text-xs  hover:text-[#ff4747]">Ayuda</span>
                    </div>
                    <div
                        className="px-[8px] cursor-pointer hover:text-[#ff4747] py-[0] relative float-left h-[39px] leading-[39px]">
                        Protección del
                        comprador
                    </div>
                    <div
                        className="border-r-[0] cursor-pointer hover:text-[#ff4747] px-[8px] py-[0] relative float-left h-[39px] leading-[39px]">
                        App</div>
                </div>
                <div
                    className="relative float-left h-[39px] leading-[39px] p-0 after:content-[''] after:absolute after:top-[11px] after:right-[0] after:w-px after:h-[16px] after:overflow-hidden after:[border-right:1px_solid_#ccc]">
                    <div className="p-0 relative float-left h-[39px] leading-[39px]">
                        <div className="px-[4px] py-[0]">
                            <div id="switcher-info" data-role="menu"
                                className="relative block pl-[10px] pr-[24px] py-[0] text-[#333] cursor-pointer leading-[39px] text-xs  hover:text-[#ff4747]">
                                <span className="relative pr-[25px]">
                                    <i className="float-none inline-block align-middle -mt-[2px] -mr-[25px] mb-[0] ml-[3px] h-[16px] bg-[0_-6119px] pl-[25px] pr-[0] py-[0] leading-[15px] bg-no-repeat bg-[url(https://ae01.alicdn.com/kf/Hb8a83075e94e442490fa26a4565b5c21Z.png)] w-[24px]"></i>
                                </span>
                                <span className="">/</span>
                                <span className="country_txt">lima - san juan de miraflores</span>
                                <span className="split">/</span>
                                <span className="language_txt">Español</span>
                                <span className="split">/</span>
                                <span className="w-[30px] inline-block text-center">PEN</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
} 