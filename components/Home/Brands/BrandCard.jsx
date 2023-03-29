import { Tab } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const BrandCard = ({ brand }) => {
    const { image, text } = brand;
    return (
        <Tab
            className={({ selected }) =>
                classNames(
                    "h-full flex flex-col justify-between border-size rounded-2xl p-6 space-y-4 focus:outline-none",
                    selected ? "border-gradient-bg-primary" : "border-gradient-bg-white"
                )
            }
        >
            <Image src={image} alt="" className="my-auto w-full" width={100} height={100} />
            <p className="text-center font-semibold">{text}</p>
        </Tab>
    );
};

export default BrandCard;
