import Arrow from "@/components/Common/Arrow";
import Button from "@/components/Common/Button";
import React from "react";
import { product_data } from "../Brands/Data";
import ProductCard from "../Brands/ProductCard";

const Products = () => {
    return (
        <div className="bg-background-sec section-gap">
            <div className="container space-y-12">
                <h1 className="text-center">
                    MORE PROFITABLE MINERS <Arrow />
                </h1>
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
