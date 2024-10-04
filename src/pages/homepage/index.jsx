import React from "react";

// Custom hooks for scroll effects
import useIntroScrollEffect from "./IntroScrollEffects";
import useHeroScrollEffects from "./HeroScrollEffects";

// Import components
import HeroSection from "./HeroSection";
import Introduction from "./Introduction";
import Header from "../../components/header/index"
import Footer from "../../components/footer/index"

const Home = () => {

    useHeroScrollEffects(); 
    useIntroScrollEffect();

    return (
        <div className="bg-gradient-to-tr from-neutral-800 from-0% to-neutral-950 to-70% w-full h-full">
            <Header />
            <HeroSection />
            <Introduction />
            <Footer />
        </div>
    );
};

export default Home;