import Image from "next/image";
import React from "react";

const CreateSell = () => {
	return (
		<div className=" grid grid-cols-3 ">
			<div className=" flex flex-col gap-10 pr-10 py-12 ">
				<div className=" flex justify-end items-end ">
					<Image
						src="/createSell/image1.png"
						width={0}
						height={0}
						alt="Picture of the author"
						sizes="100vw"
						style={{ objectFit: "contain", width: "300px", height: "auto" }}
					/>
				</div>
				<div className=" flex justify-end items-end ">
					<Image
						src="/createSell/image3.png"
						width={0}
						height={0}
						alt="Picture of the author"
						sizes="100vw"
						style={{ objectFit: "contain", width: "200px", height: "auto" }}
					/>
				</div>
			</div>
			<div className=" flex justify-start items-center ">
				<Image
					src="/createSell/image2.png"
					width={0}
					height={0}
					alt="Picture of the author"
					sizes="100vw"
					style={{ objectFit: "contain", width: "250px", height: "auto" }}
				/>
			</div>
			<div className=" flex justify-center items-center ">
				<div>
					<div>
						<h1 className=" font-bold text-4xl w-[48%] uppercase">
							Create and sell your NFTs!
						</h1>
					</div>
					<div className=" py-6 ">
						<p className=" text-lg w-[80%] ">
							{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.`}
						</p>
					</div>
					<div>
						<button
							title="signup"
							type="button"
							className=" bg-blue-800 text-white py-3 px-9 rounded-3xl "
						>
							Sign Up Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateSell;
