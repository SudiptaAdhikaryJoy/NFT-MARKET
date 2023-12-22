import React from 'react';
import GradingIcon from "@mui/icons-material/Grading";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";


const AmazingNft = () => {
    return (
			<div className=" grid grid-cols-3 px-20 py-10 bg-gray-100">
				<div>
					<h1 className=" font-bold text-3xl w-1/2 uppercase">
						The amazing NFT art of the world here
					</h1>
				</div>
				<div className=" flex flex-col gap-4 ">
					<h1 className=" text-xl font-medium ">
						<GradingIcon /> Fast Transaction
					</h1>
					<p className=" w-2/3  ">
						{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						etiam viverra tellus imperdiet.`}
					</p>
				</div>
				<div className=" flex flex-col gap-4 ">
					<h1 className=" text-xl font-medium ">
						{" "}
						<AccountBalanceIcon /> Growth Transaction
					</h1>
					<p className=" w-2/3  ">
						{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						etiam viverra tellus imperdiet.`}
					</p>
				</div>
			</div>
		);
};

export default AmazingNft;