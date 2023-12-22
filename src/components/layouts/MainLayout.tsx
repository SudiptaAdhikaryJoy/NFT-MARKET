import React from "react";
import Header from "../ui/features/header";
import Footer from "../ui/features/footer";
import Hero from "../ui/features/hero";
import AmazingNft from "../ui/features/amazingNft";
import CreateSell from "../ui/features/createSell";
import FeatureNfts from "../ui/features/featureNfts";



const MainLayout = () => {

    return (
        <div className="bg-white text-black">
           <Header/>
           <Hero/>
            <AmazingNft/>
            <FeatureNfts/>
            <CreateSell/>
           <Footer/>
        </div>
    );
};

export default MainLayout;