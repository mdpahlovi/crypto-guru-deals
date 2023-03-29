import Arrow from "@/components/Common/Arrow";
import React from "react";
import BlogCard from "./BlogCard";
import { blogs_data } from "./Data";

const Blogs = () => {
    return (
        <div className="container section-gap space-y-12">
            <h1 className="text-center">
                FROM OUR BLOG <Arrow />
            </h1>
            <div className="grid grid-cols-3 gap-4">
                {blogs_data.map((blog, i) => (
                    <BlogCard key={i} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
