import Button from "@/components/Common/Button";
import SectionHeader from "@/components/Common/SectionHeader";
import Blogs from "@/components/Home/Blogs/Blogs";
import Brands from "@/components/Home/Brands/Brands";
import Contact from "@/components/Home/Contact/Contact";
import { best_brands, brand_logo } from "@/components/Home/Data";
import Hero from "@/components/Home/Hero";
import Partner from "@/components/Home/Partner";
import Products from "@/components/Home/Products";
import Main from "@/layouts/Main";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
    return (
        <Main>
            <Hero />
            <Brands />
            <Products />
            <div className="container section-gap grid sm:grid-cols-2 items-center gap-y-6">
                <h1 className="lg:text-5xl lg:leading-[60px]">
                    Built by <span className="font-extrabold gradient-text">experts</span> <br /> and backed by <br /> investors
                </h1>
                <div className="grid grid-cols-2 gap-4 lg:gap-8">
                    {brand_logo.map((logo, i) => (
                        <Image key={i} src={logo} alt="" width={320} height={112} />
                    ))}
                </div>
            </div>
            <Partner />
            <div className="section-gap space-y-12">
                <SectionHeader title="BEST SELLER BRANDS" />
                <Marquee>
                    {best_brands.map((logo, i) => (
                        <Image key={i} src={logo} alt="" className="mx-4" width={320} height={112} />
                    ))}
                </Marquee>
            </div>
            <Contact />
            <Blogs />
            <div className="bg-secondary section-gap text-background">
                <div className="container grid md:grid-cols-2 items-center gap-y-6">
                    <h2>Sign up for our exclusive email newsletter</h2>
                    <div className="flex flex-wrap gap-4">
                        <input type="text" placeholder="Email Address" className="px-8 py-4 rounded-full" />
                        <Button className="text-content hover:bg-background hover:text-content">Submit</Button>
                    </div>
                </div>
            </div>
        </Main>
    );
}
