import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductCompenent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList=products.map((product)=>{
        const {id,title,price,category,image}=product
        return (
            <div className="col-sm-12 col-md-4 " key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card  d-flex justify-content-center m-2 text-dark " style={{ textDecoration: 'none' ,height: 31+'rem'}} >
                        <img className="img-fluid " style ={{ objectFit:"contain" ,height: 20+'rem'}}src={image} alt={title}/>                       
                            <h5 className="card-title text-center" > {title}</h5>
                            <p className="card-text text-center">{category}</p>     
                            <p className="card-text text-center">{price}$</p>                                                 
                    </div>  
                 </Link>
            </div>       
        );
    })
        return <>{renderList}</>
}
export default ProductCompenent;