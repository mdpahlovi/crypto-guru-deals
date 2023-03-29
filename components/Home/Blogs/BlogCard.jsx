import Image from "next/image";
import { useState } from "react";

const BlogCard = ({ blog }) => {
    const [hover, setHover] = useState(false);
    const { image, date, title, description } = blog;

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`group h-full flex flex-col justify-between ${
                hover ? "border-size border-gradient-bg-white" : "bg-background border-2"
            } rounded-2xl p-6 space-y-4`}
        >
            <Image src={image} alt="" className="my-auto w-full" width={100} height={100} />
            <div className="space-y-2">
                <p className="text-xs">{date}</p>
                <p className="font-semibold">{title}</p>
                <p>{description}</p>
            </div>
            <button className="group-hover:bg-primary border-2 border-primary rounded-full py-2.5 inline-flex items-center justify-center gap-2">
                Read More
            </button>
        </div>
    );
};

export default BlogCard;
