import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<div className=" grid grid-cols-4 gap-10 justify-center items-start px-20 ">
			<div className=" flex flex-col justify-center item-start gap-5 ">
				<div>
					<h1 className=" font-bold text-black text-2xl  ">NFTERS</h1>
				</div>
				<div>
					<p>
						{`The world’s first and largest digital marketplace for crypto
						collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
						exclusive digital items.`}
					</p>
				</div>
				<div className=" flex gap-5 ">
					<Image
						src="/facebook.png"
						width={0}
						height={0}
						alt="Picture of the author"
						sizes="100vw"
						style={{ objectFit: "contain", width: "35px", height: "auto" }}
					/>
					<Image
						src="/twitter.png"
						width={0}
						height={0}
						alt="Picture of the author"
						sizes="100vw"
						style={{ objectFit: "contain", width: "35px", height: "auto" }}
					/>
					<Image
						src="/linkedin.png"
						width={0}
						height={0}
						alt="Picture of the author"
						sizes="100vw"
						style={{ objectFit: "contain", width: "35px", height: "auto" }}
					/>
				</div>
			</div>
			<div className=" flex flex-col justify-center item-start gap-5 ">
				<div>
					<h1 className=" font-bold text-black ">Market Place</h1>
				</div>
				<div className=" flex flex-col gap-2 pb-3 ">
					<h1>All NFTs</h1>
					<h1>New</h1>
					<h1>Art</h1>
					<h1>Sports</h1>
					<h1>Utility</h1>
					<h1>Music</h1>
					<h1>Domain name</h1>
				</div>
			</div>
			<div className=" flex flex-col justify-center item-start gap-5 ">
				<div>
					<h1 className=" font-bold text-black ">My Account</h1>
				</div>
				<div className=" flex flex-col gap-2 pb-3 ">
					<h1>Profile</h1>
					<h1>Favorite</h1>
					<h1>My Collections</h1>
					<h1>Settings</h1>
				</div>
			</div>
			<div className=" flex flex-col justify-center item-start gap-5 ">
				<div>
					<h1 className=" font-bold text-black ">My Account</h1>
				</div>
				<div className=" flex flex-col gap-2 pb-3 ">
					<p>
						{`Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.`}
					</p>
				</div>
				<div>
					<input
						type="text"
						title="search"
						placeholder="Enter your email"
						className=" border-[2px] rounded-3xl w-[100%] px-2 py-2 "
					/>
					<button
						title="search"
						type="submit"
						className=" relative border-[2px] rounded-3xl px-4 py-2 left-[270px] bottom-[2.7rem] bg-blue-700 text-white text-sm"
					>
						Subscribe now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
