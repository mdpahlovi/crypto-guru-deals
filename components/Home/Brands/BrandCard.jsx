import Image from "next/image";
import React from "react";

const BrandCard = ({ brand, index }) => {
    const { image, text } = brand;
    return (
        <div
            className={`h-full flex flex-col justify-between border-size ${
                index === 0 ? "border-gradient-bg-primary" : "border-gradient-bg-white"
            } rounded-2xl p-6 space-y-4`}
        >
            <Image src={image} alt="" className="my-auto w-full" width={100} height={100} />
            <p className="text-center font-semibold">{text}</p>
        </div>
    );
};

export default BrandCard;
