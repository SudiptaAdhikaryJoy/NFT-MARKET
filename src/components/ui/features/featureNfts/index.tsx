import Image from "next/image";
import React from "react";

const FeatureNfts = () => {
	return (
		<div className="bg-gray-200 pt-10">
			<div>
				<h1 className=" px-20 font-bold text-3xl uppercase">
					Collection Featured NFTs
				</h1>
			</div>
			<div className=" grid grid-cols-3 py-10 px-20 ">
				<div className=" flex ">
					<div>
						<Image
							src="/featureNfts/color1.png"
							width={0}
							height={0}
							alt="Picture of the author"
							sizes="100vw"
							style={{ objectFit: "contain", width: "300px", height: "auto" }}
						/>
					</div>
					<div className=" flex flex-col gap-3 px-2  ">
						<Image
							src="/featureNfts/smallColor1.png"
							width={0}
							height={0}
							alt="Picture of the author"
							sizes="100vw"
							style={{ objectFit: "contain", width: "100px", height: "auto" }}
						/>
						<Image
							src="/featureNfts/smallColor2.png"
							width={0}
							height={0}
							alt="Picture of the author"
							sizes="100vw"
							style={{ objectFit: "contain", width: "100px", height: "auto" }}
						/>
						<Image
							src="/featureNfts/smallColor3.png"
							width={0}
							height={0}
							alt="Picture of the author"
							sizes="100vw"
							style={{ objectFit: "contain", width: "100px", height: "auto" }}
						/>
					</div>
				</div>

				<div className=" flex ">
					<div>
						<Image
							src="/createSell/image1.png"
							width={0}
							height={0}
							alt="Picture of the author"
							sizes="100vw"
							style={{ objectFit: "contain", width: "300px", height: "auto" }}
						/>
					</div>
					<div className=" flex flex-col gap-3 px-2  ">
						<Image
							src="/featureNfts/smallColor1.png"
							width={0}
							height={0}
							alt="Picture of the author"
							sizes="100vw"
							style={{ objectFit: "contain", width: "100px", height: "auto" }}
						/>
						<Image
							src="/featureNfts/smallColor2.png"
							width={0}
							height={0}
							alt="Picture of the author"
							sizes="100vw"
							style={{ objectFit: "contain", width: "100px", height: "auto" }}
						/>
						<Image
							src="/featureNfts/smallColor3.png"
							width={0}
							height={0}
							alt="Picture of the author"
							sizes="100vw"
							style={{ objectFit: "contain", width: "100px", height: "auto" }}
						/>
					</div>
				</div>

				<div className=" flex ">
					<div>
						<Image
							src="/featureNfts/color3.png"
							width={0}
							height={0}
							alt="Picture of the author"
							sizes="100vw"
							style={{ objectFit: "contain", width: "300px", height: "auto" }}
						/>
					</div>
					<div>
						<div className=" flex flex-col gap-3 px-3 justify-center item-center">
							<Image
								src="/featureNfts/smallColor1.png"
								width={0}
								height={0}
								alt="Picture of the author"
								sizes="100vw"
								style={{ objectFit: "contain", width: "100px", height: "auto" }}
							/>
							<Image
								src="/featureNfts/smallColor2.png"
								width={0}
								height={0}
								alt="Picture of the author"
								sizes="100vw"
								style={{ objectFit: "contain", width: "100px", height: "auto" }}
							/>
							<Image
								src="/featureNfts/smallColor3.png"
								width={0}
								height={0}
								alt="Picture of the author"
								sizes="100vw"
								style={{ objectFit: "contain", width: "100px", height: "auto" }}
							/>
						</div>
					</div>
				</div>

				<div>
					<div className=" py-3 ">
						<h1 className=" font-bold ">Amazing Collection</h1>
					</div>
					<div className="flex gap-[28%] justify-start items-center">
						<div className="flex  ">
							<div>
								<Image
									src="/featureNfts/ppl1.png"
									width={0}
									height={0}
									alt="Picture of the author"
									sizes="100vw"
									style={{
										objectFit: "contain",
										width: "35px",
										height: "auto",
									}}
								/>
							</div>
							<div>
								<p className=" px-2 py-1 ">by Arkhan</p>
							</div>
						</div>
						<div>
							<p className=" text-blue-600 border rounded-2xl px-2 border-blue-500 ">
								Total 54 Items
							</p>
						</div>
					</div>
				</div>

				<div>
					<div className=" py-3 ">
						<h1 className=" font-bold ">Amazing Collection</h1>
					</div>
					<div className="flex gap-[28%] justify-start items-center">
						<div className="flex  ">
							<div>
								<Image
									src="/featureNfts/ppl1.png"
									width={0}
									height={0}
									alt="Picture of the author"
									sizes="100vw"
									style={{
										objectFit: "contain",
										width: "35px",
										height: "auto",
									}}
								/>
							</div>
							<div>
								<p className=" px-2 py-1 ">by Arkhan</p>
							</div>
						</div>
						<div>
							<p className=" text-blue-600 border rounded-2xl px-2 border-blue-500 ">
								Total 54 Items
							</p>
						</div>
					</div>
				</div>

				<div>
					<div className=" py-3 ">
						<h1 className=" font-bold ">Amazing Collection</h1>
					</div>
					<div className="flex gap-[28%] justify-start items-center">
						<div className="flex  ">
							<div>
								<Image
									src="/featureNfts/ppl1.png"
									width={0}
									height={0}
									alt="Picture of the author"
									sizes="100vw"
									style={{
										objectFit: "contain",
										width: "35px",
										height: "auto",
									}}
								/>
							</div>
							<div>
								<p className=" px-2 py-1 ">by Arkhan</p>
							</div>
						</div>
						<div>
							<p className=" text-blue-600 border rounded-2xl px-2 border-blue-500 ">
								Total 54 Items
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureNfts;
