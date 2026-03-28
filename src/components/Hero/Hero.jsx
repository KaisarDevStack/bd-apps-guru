
import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";

import heroImg from "../../assets/hero.png"

const Hero = () => {
    const APKUrl = "https://play.google.com/store/apps/details?id=host";
    const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
    return (
        <div className="flex flex-col justify-center items-center gap-10 space-y-10 bg-base-200 min-h-screen">
            <div className="hero-content text-center pt-20">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold">We Build <br />
                        <span className='text-[#9F62F2]'>Productive</span> Apps</h1>
                    <p className="py-6 text-sm  text-[#627382]">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <GooglePlayButton className={"custom-style"}
                            title="" height={20} width={14}></GooglePlayButton>
                        <AppStoreButton className={"custom-style"}
                            title="" height={20} width={14}></AppStoreButton>

                    </div>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;