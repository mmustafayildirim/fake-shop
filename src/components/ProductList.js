import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCompenent from "./ProductComponent";
import {setProducts} from "..//redux/actions/productAction"

const ProductList=()=>{
    const products=useSelector((state)=>state);
    const dispatch=useDispatch();

    const fetchProducts= async()=>{
        const response=await axios.get('https://fakestoreapi.com/products')
        .catch(err=>{
            console.log("Err",err)
        });
        dispatch(setProducts(response.data))
    };
  useEffect(()=>{
      fetchProducts();
  },[])
  console.log("Products:",products)
    return (
        <div className="container ">
            <div className="row mt-2 ">
                <div class="card-group ">
                    <ProductCompenent/>
                </div>    
            </div>
            
        </div>  
        
    )
}
export default ProductList;