import React from 'react';
import Image from 'next/image';
import ExploreIcon from "@mui/icons-material/Explore";

const TopCollection = () => {
    return (
			<div className=" grid grid-cols-3 p-10">
				<div>
					<div>
						<div className=" flex  justify-center  ">
							<Image
								src="/discoverNfts/image4.png"
								width={0}
								height={0}
								alt="Picture of the author"
								sizes="100vw"
								style={{ objectFit: "contain", width: "400px", height: "auto" }}
							/>
						</div>
						<div className=" flex justify-around items-center ">
							<div className=" flex gap-4 py-3">
								<div>
									<Image
										src="/discoverNfts/image4.png"
										width={0}
										height={0}
										alt="Picture of the author"
										sizes="100vw"
										style={{
											objectFit: "contain",
											width: "50px",
											height: "auto",
											borderRadius: "50%",
										}}
									/>
								</div>
								<div>
									<h1>The Futr Abst</h1>
									<h1>10 in the stock</h1>
								</div>
							</div>
							<div>
								<div>
									<h1>Highest Bid</h1>
								</div>
								<div>
									<ExploreIcon className=" text-gray-400 " /> 0.25 ETH
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className=" flex gap-4 ">
						<div>
							<Image
								src="/discoverNfts/image4.png"
								width={0}
								height={0}
								alt="Picture of the author"
								sizes="100vw"
								style={{ objectFit: "contain", width: "200px", height: "auto" }}
							/>
						</div>
						<div>
							<div>
								<h1>The Futr Abst</h1>
							</div>
							<div className=" flex justify-center items-center gap-4 py-3">
								<div>
									<Image
										src="/discoverNfts/image4.png"
										width={0}
										height={0}
										alt="Picture of the author"
										sizes="100vw"
										style={{
											objectFit: "contain",
											width: "50px",
											height: "auto",
											borderRadius: "50%",
										}}
									/>
								</div>
								<div>
									<button
										title="eth"
										type="button"
										className=" border border-green-700 rounded-lg p-3 "
									>
										0.25 ETH
									</button>
								</div>
								<div>
									<h1>1 of 8</h1>
								</div>
							</div>
							<div>
								<button
									title="categories"
									type="button"
									className=" border rounded-3xl px-4 py-2 bg-blue-800 text-white"
								>
									Place a Bid
								</button>
							</div>
						</div>
					</div>
					<div className=" flex gap-4 py-3 ">
						<div>
							<Image
								src="/discoverNfts/image4.png"
								width={0}
								height={0}
								alt="Picture of the author"
								sizes="100vw"
								style={{ objectFit: "contain", width: "200px", height: "auto" }}
							/>
						</div>
						<div>
							<div>
								<h1>The Futr Abst</h1>
							</div>
							<div className=" flex justify-center items-center gap-4 py-3">
								<div>
									<Image
										src="/discoverNfts/image4.png"
										width={0}
										height={0}
										alt="Picture of the author"
										sizes="100vw"
										style={{
											objectFit: "contain",
											width: "50px",
											height: "auto",
											borderRadius: "50%",
										}}
									/>
								</div>
								<div>
									<button
										title="eth"
										type="button"
										className=" border border-green-700 rounded-lg p-3 "
									>
										0.25 ETH
									</button>
								</div>
								<div>
									<h1>1 of 8</h1>
								</div>
							</div>
							<div>
								<button
									title="categories"
									type="button"
									className=" border rounded-3xl px-4 py-2 bg-blue-800 text-white"
								>
									Place a Bid
								</button>
							</div>
						</div>
					</div>
					<div className=" flex gap-4 ">
						<div>
							<Image
								src="/discoverNfts/image4.png"
								width={0}
								height={0}
								alt="Picture of the author"
								sizes="100vw"
								style={{ objectFit: "contain", width: "200px", height: "auto" }}
							/>
						</div>
						<div>
							<div>
								<h1>The Futr Abst</h1>
							</div>
							<div className=" flex justify-center items-center gap-4 py-3">
								<div>
									<Image
										src="/discoverNfts/image4.png"
										width={0}
										height={0}
										alt="Picture of the author"
										sizes="100vw"
										style={{
											objectFit: "contain",
											width: "50px",
											height: "auto",
											borderRadius: "50%",
										}}
									/>
								</div>
								<div>
									<button
										title="eth"
										type="button"
										className=" border border-green-700 rounded-lg p-3 "
									>
										0.25 ETH
									</button>
								</div>
								<div>
									<h1>1 of 8</h1>
								</div>
							</div>
							<div>
								<button
									title="categories"
									type="button"
									className=" border rounded-3xl px-4 py-2 bg-blue-800 text-white"
								>
									Place a Bid
								</button>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div>
						<h1 className=" text-4xl font-bold text-start  ">
							TOP COLLECTION OVER
						</h1>
						<h1 className="text-start text-purple-800 text-2xl font-semibold ">
							Last 7 Days
						</h1>
					</div>
					<div>
						<div className="flex justify-start items-center gap-5">
							<div>
								<h1 className=" text-2xl font-bold ">1</h1>
							</div>
							<div>
								<Image
									src="/discoverNfts/image4.png"
									width={0}
									height={0}
									alt="Picture of the author"
									sizes="100vw"
									style={{
										objectFit: "contain",
										width: "50px",
										height: "auto",
										borderRadius: "50%",
									}}
								/>
							</div>
							<div>
								{" "}
								<h1 className="text-3xl font-bold">CryptoFunks</h1>
								<h1 className="text-lg"> 198654 </h1>
							</div>
							<div>
								<h1 className=" text-green-400 font-bold text-2xl ">+26.52%</h1>
							</div>
						</div>
						<div className="flex justify-start items-center gap-5">
							<div>
								<h1 className=" text-2xl font-bold ">1</h1>
							</div>
							<div>
								<Image
									src="/discoverNfts/image4.png"
									width={0}
									height={0}
									alt="Picture of the author"
									sizes="100vw"
									style={{
										objectFit: "contain",
										width: "50px",
										height: "auto",
										borderRadius: "50%",
									}}
								/>
							</div>
							<div>
								{" "}
								<h1 className="text-3xl font-bold">CryptoFunks</h1>
								<h1 className="text-lg"> 198654 </h1>
							</div>
							<div>
								<h1 className=" text-green-400 font-bold text-2xl ">+26.52%</h1>
							</div>
						</div>
						<div className="flex justify-start items-center gap-5">
							<div>
								<h1 className=" text-2xl font-bold ">1</h1>
							</div>
							<div>
								<Image
									src="/discoverNfts/image4.png"
									width={0}
									height={0}
									alt="Picture of the author"
									sizes="100vw"
									style={{
										objectFit: "contain",
										width: "50px",
										height: "auto",
										borderRadius: "50%",
									}}
								/>
							</div>
							<div>
								{" "}
								<h1 className="text-3xl font-bold">CryptoFunks</h1>
								<h1 className="text-lg"> 198654 </h1>
							</div>
							<div>
								<h1 className=" text-green-400 font-bold text-2xl ">+26.52%</h1>
							</div>
						</div>
						<div className="flex justify-start items-center gap-5">
							<div>
								<h1 className=" text-2xl font-bold ">1</h1>
							</div>
							<div>
								<Image
									src="/discoverNfts/image4.png"
									width={0}
									height={0}
									alt="Picture of the author"
									sizes="100vw"
									style={{
										objectFit: "contain",
										width: "50px",
										height: "auto",
										borderRadius: "50%",
									}}
								/>
							</div>
							<div>
								{" "}
								<h1 className="text-3xl font-bold">CryptoFunks</h1>
								<h1 className="text-lg"> 198654 </h1>
							</div>
							<div>
								<h1 className=" text-green-400 font-bold text-2xl ">+26.52%</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default TopCollection;