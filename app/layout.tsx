import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { HeadNavBar } from "@/components/head/headNavBar";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-[#f2f2f2] font-sans antialiased text-[#222] text-sm w-full h-full",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="min-w-[720px] h-[80px] overflow-hidden">
						<a
							className="block w-full h-full [text-indent:-9999rem] bg-no-repeat bg-top bg-[url(https://ae01.alicdn.com/kf/S6667168b09424a1aa80245f88826a285Z.png)]"
							href="https://www.aliexpress.com/gcp/300000544/aEi5KJRwxt?wh_weex=true" aria-label="banner"
						></a>
					</div>
					<div className="m-0 p-0 block">
						<HeadNavBar></HeadNavBar>
						<Navbar />
						<div className="relative mr-auto ml-auto pl-0 pr-0 w-[1200px]">
							{children}
						</div>

					</div>
				</Providers>
			</body>
		</html>
	);
}
