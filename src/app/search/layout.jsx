import { Inter } from "next/font/google";
import SearchHeader from "@/components/SearchHeader";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Google Clone with Next.js 13",
	description: "Google clone using next js 13 by Pratham Shah",
};

export default function SearchLayout({ children }) {
	return (
		<div>
			<SearchHeader />
			{children}
		</div>
	);
}
