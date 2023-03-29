import { useState } from "react";
import { HiOutlineArrowSmallLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { GiUsaFlag } from "react-icons/gi";
import { Menu, TopMenu } from "./Menu";
import Link from "next/link";

const AuthButton = () => {
    return (
        <>
            <button className="px-5 py-2 rounded-xl border border-content">Login</button>
            <button className="px-5 py-2 rounded-xl bg-primary">Signup</button>
        </>
    );
};

const SideMenu = () => {
    return (
        <>
            <span className="inline-flex items-center gap-0.5">
                <GiUsaFlag />
                US
            </span>
            <HiOutlineSearch size={18} />
            <HiOutlineShoppingCart size={18} />
            <div className="hidden xs:flex gap-4">
                <AuthButton />
            </div>
        </>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-background top-0 z-20 border-b border-base-content/10">
            <div className="container h-24 flex justify-between items-center">
                <div className="flex xl:hidden items-center space-x-5">
                    <IoMenu size={28} onClick={() => setOpen(true)} />
                </div>
                <Link href="/" className="w-full xl:w-auto flex justify-center">
                    <h1>
                        <span className="text-secondary">CRYPTO</span> <span className="hidden sm:inline-block">GURU DEALS</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex flex-row items-center gap-4 font-medium">
                    <Menu />
                </div>
                <div className="hidden lg:flex items-center gap-4">
                    <SideMenu />
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`z-10 fixed w-full h-full top-0 bg-background transition-all duration-500 ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                } xl:hidden`}
            >
                <div className="p-7 pb-6 flex justify-between items-center">
                    <HiOutlineArrowSmallLeft size={28} onClick={() => setOpen(false)} />
                    <div className="flex items-center gap-4">
                        <SideMenu />
                    </div>
                </div>
                <div className="px-8 pb-10 flex flex-col space-y-4">
                    <Menu />
                    <div className="flex gap-4">
                        <AuthButton />
                    </div>
                </div>
                <hr />
                <div className="px-8 py-10 space-y-4">
                    <TopMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
