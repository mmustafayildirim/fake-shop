import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectedProducts,removeSelectedProducts } from "../redux/actions/productAction";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {id,title,price,category,image,description}=product;
    const { productId } = useParams();
    const dispatch=useDispatch();


    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => { console.log("Err:", err) });
            
            dispatch(selectedProducts(response.data));
    };

    useEffect(()=>{
        if(productId&&productId!=="") fetchProductDetails();
        return ()=>{
            dispatch(removeSelectedProducts())
        }
    },[productId])


    return (
        <div className="row mt-5" key={id}>
            <div className="col-lg-12 col-md-6 col-sm-4 justify-content-center align-items-center d-flex">
                <img className="img-fluid" style ={{ objectFit:"contain" ,height: 20+'rem' }}src={image} alt={title}/> 
            </div>
            <div className="col-lg-12 col-md-6   justify-content-center align-items-center  mt-2 text-dark">
                <div className="card">
                    <h5 className="card-title text-center" > {title}</h5>
                    <p className="card-text text-center">{category}</p>     
                    <p className="card-text text-center">{price}$</p>
                    <p className="card-text text-center">{description}</p>
                </div>
            </div>
        </div>
       
         
    )
}
export default ProductDetails;