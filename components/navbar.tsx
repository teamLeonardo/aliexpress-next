import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
} from "@nextui-org/navbar";

import { RiShoppingCartLine } from "react-icons/ri"
import { Input } from "@nextui-org/input";


import NextLink from "next/link";

import {
	SearchIcon,
} from "@/components/icons";

import Image from "next/image";
import { UiBadge } from "./uiBadge";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "relative w-auto overflow-hidden h-[36px] pl-[16px] pr-[0] py-[0] border-[2px] border-solid border-[#ff4747] border-r-[0] rounded-tl-[1px] rounded-bl-[1px]",
				input: "relative block w-full h-full pl-[0] pr-[10px] py-[11px] leading-[18px] text-[13px] border-[0] font-[arial] ",
			}}
			endContent={
				<div className="right-[0] top-[0] w-[40px] h-[36px] bg-[#ff4747] cursor-pointer flex justify-center items-center">
					<SearchIcon className="text-white pointer-events-none w-[50px]" />
				</div>
			}
			labelPlacement="outside"
			placeholder="Search..."
			type="search"
		/>
	);

	return (
		<NextUINavbar maxWidth="xl" className="pb-[34px] bg-[#ffffff]" position="static">
			<NavbarContent className="basis-1/5" justify="start">
				<NavbarBrand as="li" className="gap-3">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						{/* <div className="w-[150px] min-h-[50px] bg-[url()]"></div> */}
						<Image alt="a" className="w-full" width={150} height={30} src={"https://ae01.alicdn.com/kf/S46f745032e6e4f3da94f1a3df564f238K/398x92.png"}></Image>
					</NextLink>
				</NavbarBrand>

			</NavbarContent>
			{/* <div class="search-key-box">
				<input type="text" placeholder="netflix españa" maxlength="50" autocomplete="off" value="" name="SearchText" class="search-key" id="search-key">
			</div> */}
			<NavbarContent
				className="hidden sm:flex basis-3/5 "
				justify="center"
			>{searchInput}
			</NavbarContent>
			<NavbarContent
				className="flex basis-1/5 justify-between items-center"
				justify="end"
			>
				<UiBadge classBadge="bg-[#ff4747] text-[#ffffff] cursor-pointer" isInvisible={false} content={50} shape="circle" >
					<RiShoppingCartLine className="cursor-pointer" size={30}></RiShoppingCartLine>
				</UiBadge>
				<div className="w-[140px] h-auto self-start">
					<img className="w-full h-full" src="https://ae01.alicdn.com/kf/S24de37b6a76348e1841be18f537f72adt/240x168.png" alt="" />
				</div>
			</NavbarContent>

		</NextUINavbar>
	);
};
