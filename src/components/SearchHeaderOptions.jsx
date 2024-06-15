"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { useSearchParams } from "next/navigation";
import { AiOutlineFileImage, AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
export default function SearchHeaderOptions() {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get("searchTerm");
	function selectTab(tab) {
		router.push(
			`/search/${
				tab === "images" ? "image" : "web"
			}?searchTerm=${searchTerm}`
		);
	}
	return (
		<div className="flex select-none space-x-2 justify-center w-full lg:justify-start lg:pl-52 text-gray-700 text-sm">
			<div
				onClick={() => selectTab("All")}
				className={`flex  items-center space-x-1  border-b-4 border-transparent active:to-blue-500 cursor-pointer pb-3 px-2 ${
					pathname === "/search/web" &&
					" !text-blue-600 !border-b-blue-600 "
				}`}
			>
				<AiOutlineSearch className=" text-lg " />
				<p>All</p>
			</div>

			<div
				onClick={() => selectTab("images")}
				className={`flex  items-center space-x-1  border-b-4 border-transparent active:to-blue-500 cursor-pointer pb-3 px-2 ${
					pathname === "/search/image" &&
					" text-blue-600 border-b-blue-600"
				}  `}
			>
				<AiOutlineFileImage className=" text-lg " />
				<p>Images</p>
			</div>
		</div>
	);
}
