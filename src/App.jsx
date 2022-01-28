import { Product } from "./component/form/product/Product";
import { useState } from "react";
import {Product as ProductItem} from "./component/list/product/Product";
import "./App.css"

function App() {

    const [products, setProducts] = useState(
        localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : []
    );

    const [editMode, setEditMode] = useState(false);

    const addProduct = (product) =>{
        updateProducts([...products,product])
    }

    const deleteProduct = (product) => {
        updateProducts(products.filter(item => item.name !== product.name))
    }

    const editProduct = (product) => {
        setEditMode(true)
    }

    const updateProducts = (products) =>{
        setProducts(products);
        localStorage.setItem("products", JSON.stringify(products))
        setEditMode(false)
    }


    return (
        <div className = "App" >
        <Product addProductProp = {addProduct} />
        {
            products.map(
                (item) => <ProductItem
                            itemProp = {item}
                            deleteProductProp={deleteProduct}
                            editProductProp = {editProduct}
                         />
            )
        }
        </div>
    );
}

export default App;