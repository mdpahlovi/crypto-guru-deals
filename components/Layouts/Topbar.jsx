import { TopMenu } from "./Menu";

const Topbar = () => {
    return (
        <div className="bg-accent text-background h-16 flex items-center">
            <div className="container flex gap-8 font-medium">
                <TopMenu />
            </div>
        </div>
    );
};

export default Topbar;
