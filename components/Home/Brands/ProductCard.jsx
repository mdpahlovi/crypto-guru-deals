import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const ProductCard = ({ product }) => {
    const [hover, setHover] = useState(false);
    const { image, text, price } = product;

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`group h-full flex flex-col justify-between ${
                hover ? "border-size border-gradient-bg-white" : "bg-background border-2"
            } rounded-2xl p-6 space-y-4`}
        >
            <Image src={image} alt="" className="my-auto w-full" width={100} height={100} />
            <p className="font-semibold">{text}</p>
            <button className="group-hover:bg-primary border-2 border-primary rounded-full py-2.5 inline-flex items-center justify-center gap-2">
                {hover ? (
                    <>
                        View Product <HiOutlineShoppingCart size={18} />
                    </>
                ) : (
                    `US$ ${price}`
                )}
            </button>
        </div>
    );
};

export default ProductCard;
