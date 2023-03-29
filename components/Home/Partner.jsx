import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Partner = () => {
    return (
        <div className="bg-background-sec section-gap">
            <div className="container space-y-12">
                <SectionHeader title="HOSTING PARTNER" />
                <div className="grid sm:grid-cols-2 items-center gap-10 lg:gap-16">
                    <Image src="/assets/partner.png" alt="" className="w-full" width={100} height={100} />
                    <div>
                        <h1 className="font-extrabold lg:text-5xl mb-4 lg:mb-8">
                            <span className="text-secondary">CRYPTO</span> <br /> GURU DEALS
                        </h1>
                        <p className="sm:max-h-32 md:max-h-44 lg:max-h-full overflow-hidden">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;
