import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { SectionCategory } from "@/components/home/sectionCategory";
import { SuperOfertas } from "@/components/home/superOfertas";

export default function Home() {
	return (
		<>
			<SectionCategory></SectionCategory>
			<SuperOfertas></SuperOfertas>
		</>
	);
}
