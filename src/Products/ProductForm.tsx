import React from "react";

interface ProductFormProps {}

const ProductForm: React.FC<ProductFormProps> = ({}) => {
    return (
        <>
            <h2>Add game to the store</h2>
            <form>
                <input type="text" placeholder="Game title" name="title" />
                <input type="number" placeholder="Price" name="price" />
                <input type="text" placeholder="ID" name="id" />
                <button>Add price</button>
            </form>
        </>
    );
};

export default ProductForm;
