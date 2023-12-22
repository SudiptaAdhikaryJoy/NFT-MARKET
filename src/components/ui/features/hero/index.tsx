import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
			<div className=" flex justify-start item-center gap-10 px-20 py-10">
				<div className=' flex flex-col gap-10 '>
					<div>
						<h1 className=" text-4xl font-bold uppercase w-[60%] ">
							Discover, and collect Digital Art NFTs{" "}
						</h1>
					</div>
					<div>
						<p className=" text-lg w-1/2 ">
							{`Digital marketplace for crypto collectibles and non-fungible
							tokens (NFTs). Buy, Sell, and discover exclusive digital assets.`}
						</p>
					</div>
					<div>
						<button
							title="explore"
							type="button"
							className=" bg-blue-800 text-white py-3 px-9 rounded-3xl "
						>
							Explore Now
						</button>
					</div>
					<div className=" flex gap-10 ">
						<h1 className=" flex flex-col gap-2 ">
							<span className=" text-4xl font-bold ">98K+</span>{" "}
							<span>Artwork</span>
						</h1>
						<h1 className=" flex flex-col gap-2 ">
							<span className=" text-4xl font-bold ">12K+</span>
							<span>Auction</span>
						</h1>
						<h1 className=" flex flex-col gap-2 ">
							<span className=" text-4xl font-bold ">15K+</span>
							<span>Artist</span>
						</h1>
					</div>
				</div>
				<div>
					<Image
						src="/heroimage.png"
						width={0}
						height={0}
						alt="Picture of the author"
						sizes="100vw"
						style={{ objectFit: "contain", width: "400px", height: "auto" }}
					/>
				</div>
			</div>
		);
};

export default Hero;