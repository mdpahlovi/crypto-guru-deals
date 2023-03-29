import { useState } from "react";
import { HiOutlineArrowSmallLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { GiUsaFlag } from "react-icons/gi";
import { Menu, TopMenu } from "./Menu";
import Link from "next/link";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-background-sec top-0 z-20 border-b border-base-content/10">
            <div className="container h-24 flex justify-between items-center">
                <div className="flex lg:hidden items-center space-x-5">
                    <IoMenu size={28} onClick={() => setOpen(true)} />
                </div>
                <Link href="/" className="w-full lg:w-auto flex justify-center">
                    <h1>
                        <span className="text-secondary">CRYPTO</span> GURU DEALS
                    </h1>
                </Link>
                <div className="hidden lg:flex flex-row items-center gap-4 font-medium">
                    <Menu />
                </div>
                <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-0.5">
                        <GiUsaFlag />
                        US
                    </span>
                    <HiOutlineSearch size={18} />
                    <HiOutlineShoppingCart size={18} />
                    <button className="px-5 py-2 rounded-xl border border-content">Login</button>
                    <button className="px-5 py-2 rounded-xl bg-primary">Signup</button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`z-10 fixed w-full h-full top-0 bg-background-sec transition-all duration-500 ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                } lg:hidden`}
            >
                <div className=" p-4 flex justify-between items-center">
                    <HiOutlineArrowSmallLeft size={28} onClick={() => setOpen(false)} />
                    <div className="flex justify-between items-center gap-4">Pahlovi</div>
                </div>
                <div className="p-6 pb-10 space-y-4">
                    <Menu />
                </div>
                <hr />
                <div className="px-6 py-10 space-y-4">
                    <TopMenu />
                </div>
                <hr />
                <h1>Pahlovi</h1>
            </div>
        </nav>
    );
};

export default Navbar;
