import { useEffect, useState } from "react";
import Product from "./product";
import axios from "axios";
import url from '../api/api';

function AllProducts() {

    const getAllProduct = () => {
        axios.get(`${url}/products`).then(
            (response) => {
                //console.log(response);
                setProduct(response.data);
            }, 
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(() => {
        getAllProduct();
    }, []);

   const [products, setProduct] = useState([]);

    if (products.length > 0) {
        return (
                 products.map((data) =>
                 <div style={ {display : 'inline-block'}}>
                 <Product key={data.id} product={data}/>
                 </div>
                 )            
        )
    } else {
        return(
            <h1>No product found...</h1>
        );
    }
}

export default AllProducts;






