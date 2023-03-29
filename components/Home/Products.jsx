import Button from "@/components/Common/Button";
import SectionHeader from "@/components/Common/SectionHeader";
import ProductCard from "./Brands/ProductCard";
import { product_data } from "./Data";

const Products = () => {
    return (
        <div className="bg-background-sec section-gap">
            <div className="container space-y-12">
                <SectionHeader title="MORE PROFITABLE MINERS" />
                <div className="grid grid-cols-4 gap-4">
                    {product_data.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button>View All Products</Button>
                </div>
            </div>
        </div>
    );
};

export default Products;
