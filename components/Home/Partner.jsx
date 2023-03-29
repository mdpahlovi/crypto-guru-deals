import Image from "next/image";
import React from "react";
import Arrow from "../Common/Arrow";

const Partner = () => {
    return (
        <div className="bg-background-sec section-gap">
            <div className="container space-y-12">
                <h1 className="text-center">
                    HOSTING PARTNER <Arrow />
                </h1>
                <div className="grid grid-cols-2 items-center gap-16">
                    <Image src="/assets/partner.png" alt="" className="w-full" width={100} height={100} />
                    <div>
                        <h1 className="font-extrabold text-[40px] xs:text-5xl lg:text-6xl mb-8">
                            <span className="text-secondary">CRYPTO</span> <br /> GURU DEALS
                        </h1>
                        <p>
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
