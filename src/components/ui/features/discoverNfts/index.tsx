import React from 'react';
import {DiscoverData} from '../../../utils/data';
import Image from 'next/image';
import SpaIcon from "@mui/icons-material/Spa";
import FilterListIcon from "@mui/icons-material/FilterList";

const DiscoverNfts = () => {
    return (
			<div className=" bg-gray-100 p-20">
				<div>
					<h1 className=" font-bold text-4xl w-[48%] uppercase">
						Discover more NFTs
					</h1>
				</div>
				<div className=' flex justify-between items-center '>
					<div className="flex gap-8 pt-4">
						<button
							title="categories"
							type="button"
							className=" border rounded-3xl px-4 py-2 bg-blue-800 text-white"
						>
							All Categories
						</button>
						<button
							title="categories"
							type="button"
							className=" border rounded-3xl px-4 py-2 bg-gray-300 text-black "
						>
							Art
						</button>
						<button
							title="categories"
							type="button"
							className=" border rounded-3xl px-4 py-2 bg-gray-300 text-black "
						>
							Celebrities
						</button>
						<button
							title="categories"
							type="button"
							className=" border rounded-3xl px-4 py-2 bg-gray-300 text-black "
						>
							Gaming
						</button>
						<button
							title="categories"
							type="button"
							className=" border rounded-3xl px-4 py-2 bg-gray-300 text-black "
						>
							Sport
						</button>
						<button
							title="categories"
							type="button"
							className=" border rounded-3xl px-4 py-2 bg-gray-300 text-black "
						>
							Music
						</button>
						<button
							title="categories"
							type="button"
							className=" border rounded-3xl px-4 py-2 bg-gray-300 text-black "
						>
							Crypto
						</button>
					</div>
					<div>
						<button
							title="filter"
							type="button"
							className=" border rounded-3xl px-4 py-2 bg-gray-300 text-purple-600 "
						><FilterListIcon className="text-purple-600"/>All Filters</button>
					</div>
				</div>
				<div className=" grid grid-cols-4 p-20 gap-5">
					{/* map through the data and create a card for each nft */}
					{DiscoverData.map((nft, index) => (
						<div
							key={index}
							className=" p-3 bg-white rounded-lg flex flex-col justify-center items-center "
						>
							<div className=" p-3 ">
								<Image
									src={nft.src}
									width={0}
									height={0}
									alt="Picture of the author"
									sizes="100vw"
									style={{
										objectFit: "contain",
										width: "200px",
										height: "auto",
									}}
								/>
								<div className=" py-2 ">
									<h1 className=" text-xl font-semibold ">{nft.name}</h1>
								</div>
								<div className=" flex justify-between pb-2 ">
									<div className=" flex justify-start items-center ">
										<div>
											<SpaIcon color="success" />
										</div>
										<div>
											<h1 className=" text-green-600 ">0.25 ETH</h1>
										</div>
									</div>
									<div>
										<h1 className=" text-gray-600 ">1 of 321</h1>
									</div>
								</div>
								<div className=" bg-gray-500 border-t border-t-zinc-400 "></div>
								<div className=" flex justify-between items-center pt-2 ">
									<div>
										<button
											title="time"
											type="button"
											className=" bg-gray-200 px-3 py-2 text-sm rounded-3xl text-purple-800"
										>
											3h 50m 2s left
										</button>
									</div>
									<div>
										<h1 className=" text-purple-800 text-sm ">Place a bid</h1>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
};

export default DiscoverNfts;