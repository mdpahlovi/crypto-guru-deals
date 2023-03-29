import Image from "next/image";

const SectionHeader = ({ title }) => {
    return (
        <h1 className="text-center">
            {title} <Image src="/icons/Arrow.png" alt="" className="mx-auto mt-2" width={30} height={30} />
        </h1>
    );
};

export default SectionHeader;
