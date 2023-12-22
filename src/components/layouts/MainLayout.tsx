import React from "react";
import Header from "../ui/features/header";
import Footer from "../ui/features/footer";
import Hero from "../ui/features/hero";
import AmazingNft from "../ui/features/amazingNft";
import CreateSell from "../ui/features/createSell";
import FeatureNfts from "../ui/features/featureNfts";
import DiscoverNfts from "../ui/features/discoverNfts";
import TopCollection from "../ui/features/topCollection";



const MainLayout = () => {

    return (
        <div className="bg-white text-black">
           <Header/>
           <Hero/>
            <AmazingNft/>
            <TopCollection />
            <FeatureNfts/>
            <CreateSell/>
            <DiscoverNfts/>
           <Footer/>
        </div>
    );
};

export default MainLayout;