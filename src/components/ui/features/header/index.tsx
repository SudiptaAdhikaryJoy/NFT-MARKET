import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
	return (
		<div className="grid grid-cols-4 bg-white text-black py-4 px-10 justify-center items-center sticky mb-3 ">
			<div className="  ">
				<h1 className=" text-2xl text-blue-700 font-semibold text-center ">
					NFTERS
				</h1>
			</div>
			<div className=" flex gap-16 text-lg">
				<h1>Marketplace</h1>
				<h1>Resource</h1>
				<h1>About</h1>
			</div>
			<div className=" mb-3  ">
				<input
					type="text"
					title="search"
					placeholder="search here"
					className=" absolute border-[2px] rounded-3xl px-8 py-2 "
				/>
				{/* <button
					title="search"
					type="submit"
					className=" relative border-[2px] rounded-3xl px-4 py-1 left-[150px] top-1 bg-blue-700 text-white "
				>
					search
				</button> */}
				<SearchIcon className=" relative rounded-3xl top-2 left-[200px] inset-y-0 cursor-pointer " />
			</div>
			<div className="flex gap-2">
				<button
					title="upload"
					type="button"
					className=" bg-blue-800 text-white py-3 px-9 rounded-3xl "
				>
					Upload
				</button>
				<button
					title="connect wallet"
					type="button"
					className="  text-blue-800 py-3 px-5 rounded-3xl border-[2px] border-blue-800"
				>
					Connect wallet
				</button>
			</div>
		</div>
	);
};

export default Header;
