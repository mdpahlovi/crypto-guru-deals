import Button from "@/components/Common/Button";
import Arrow from "../../Common/Arrow";
import BrandCard from "./BrandCard";
import { brands_data, product_data } from "./Data";
import ProductCard from "./ProductCard";

const Brands = () => {
    return (
        <div className="container section-gap space-y-12">
            <h1 className="text-center">
                SHOP BY BRAND <Arrow />
            </h1>
            <div className="grid grid-cols-6 gap-4">
                {brands_data.map((brand, i) => (
                    <BrandCard key={i} brand={brand} index={i} />
                ))}
            </div>
            <div className="grid grid-cols-4 gap-4">
                {product_data.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
            </div>
            <div className="flex justify-center">
                <Button>View All Products</Button>
            </div>
        </div>
    );
};

export default Brands;
