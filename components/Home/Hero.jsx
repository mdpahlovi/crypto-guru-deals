import Image from "next/image";
import Button from "../Common/Button";

const Hero = () => {
    return (
        <header className="bg-background-sec section-gap pt-12 sm:pt-12">
            <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="space-y-8 lg:space-y-12">
                    <h1 className="font-extrabold text-[40px] xs:text-5xl lg:text-6xl">
                        Start <span className="gradient-text">Mining</span> <br /> Today!
                    </h1>
                    <p>Operated by a team of professionals with an experience into Blockchain Management, E-Commerce and Cryptocurrency Mining.</p>
                    <Button>Buy Miners</Button>
                </div>
                <div>
                    <Image src="/assets/hero.png" alt="" width={600} height={600} className="hidden md:block ml-auto" />
                </div>
            </div>
        </header>
    );
};

export default Hero;
