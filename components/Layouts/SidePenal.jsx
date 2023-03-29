import { side_penal_data } from "../UserGuides/Data";
import { HiHome } from "react-icons/hi2";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { Disclosure } from "@headlessui/react";
import { useLocation } from "react-router-dom";

const SidePenal = () => {
    const { pathname } = useLocation();

    return (
        <div className="space-y-4 xs:min-w-[16.5rem]">
            {pathname !== "/" && (
                <div className="flex items-center gap-2 box text-primary font-medium">
                    <HiHome size={24} /> হোম
                </div>
            )}
            {side_penal_data.map(({ title, details }, index) => (
                <div key={index} className="box space-y-3">
                    <h4 className="font-bold">{title}</h4>
                    <div className="[&>*]:text-sm space-y-2.5 flex flex-col">
                        {details.map(({ link, text, child_data }, index) =>
                            link ? (
                                <a key={index} href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary">
                                    <span>
                                        <HiOutlineExternalLink size={16} />
                                    </span>
                                    {text}
                                </a>
                            ) : (
                                <Disclosure key={index}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="p-0 flex items-center gap-1">
                                                <span>{open ? <IoMdArrowDropdown size={20} /> : <IoMdArrowDropright size={20} />}</span>
                                                <span className={open ? "text-primary" : "hover:text-primary"}>{text}</span>
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="[&>*]:text-sm space-y-2.5 flex flex-col">
                                                {child_data.map(({ c_link, c_text }) => (
                                                    <a
                                                        key={index}
                                                        href={c_link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="pl-4 flex items-center gap-2 hover:text-primary"
                                                    >
                                                        <span>
                                                            <HiOutlineExternalLink size={16} />
                                                        </span>
                                                        {c_text}
                                                    </a>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SidePenal;
