import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Button = ({ children }) => {
    return (
        <button className="relative px-20 py-4 rounded-full bg-primary hover:bg-secondary hover:text-background font-medium transition-colors duration-300">
            {children}
            <HiOutlineArrowLongRight size={24} className="absolute top-4 right-10" />
        </button>
    );
};

export default Button;
