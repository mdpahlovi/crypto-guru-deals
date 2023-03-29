import Button from "@/components/Common/Button";
import SectionHeader from "@/components/Common/SectionHeader";
import { blogs_data } from "../Data";
import BlogCard from "./BlogCard";

const Blogs = () => {
    return (
        <div className="container section-gap space-y-12">
            <SectionHeader title="FROM OUR BLOG" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs_data.map((blog, i) => (
                    <BlogCard key={i} blog={blog} />
                ))}
            </div>
            <div className="flex justify-center">
                <Button>View All Blogs</Button>
            </div>
        </div>
    );
};

export default Blogs;
