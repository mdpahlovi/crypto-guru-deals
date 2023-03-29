import Button from "@/components/Common/Button";
import SectionHeader from "@/components/Common/SectionHeader";
import { Tab } from "@headlessui/react";
import { brands_data, product_data } from "../Data";
import BrandCard from "./BrandCard";
import ProductCard from "./ProductCard";

const Brands = () => {
    return (
        <div className="container section-gap space-y-12">
            <SectionHeader title="SHOP BY BRAND" />
            <Tab.Group>
                <Tab.List className="flex gap-4 overflow-x-auto">
                    {brands_data.map((brand, i) => (
                        <BrandCard key={i} brand={brand} />
                    ))}
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {product_data.map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}
                    </Tab.Panel>
                    <Tab.Panel>No Product For Brand 2</Tab.Panel>
                    <Tab.Panel>No Product For Brand 3</Tab.Panel>
                    <Tab.Panel>No Product For Brand 4</Tab.Panel>
                    <Tab.Panel>No Product For Brand 5</Tab.Panel>
                    <Tab.Panel>No Product For Brand 6</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <div className="flex justify-center">
                <Button>View All Products</Button>
            </div>
        </div>
    );
};

export default Brands;
