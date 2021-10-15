import React from "react";
import { useSelector } from "react-redux";
import { getProductsSelector } from "./products.slice";

interface ProductsListProps {}

const ProductsList: React.FC<ProductsListProps> = ({}) => {
    const products = useSelector(getProductsSelector);

    return (
        <div>
            <h2>Gameslist</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <span>{`${product.title} : ${product.price}`}</span>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
