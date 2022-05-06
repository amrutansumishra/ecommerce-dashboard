import React, { useState } from "react";
import './AddProduct.css';
import product_img1 from './products1.jpg';

const AddProduct=()=>{
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [category,setCategory] = useState();
    const [desc,setDesc] = useState();
    const [stock,setStock] = useState();
    const [photo,setPhoto] = useState();
    const [company,setCompany] = useState();
    const [error,setError] = useState();

    const onSubmitHandler =()=>{
        if(!name ||!category|| !company||!price){
            setError(true);
            return false;
        }
    }
    return(
    
        <div className="product_add">
            <div className="product_add_review">
                <div className="product_review_img">
                { photo?<img src={photo}  alt="product_image" />:<img src={product_img1}  alt="product_image" /> }
                   <div><h4>Description: </h4>
                       {desc}</div>
                </div>
                
                <div className="product_details">
                    <div>
                        <h4>Product Name : {name}</h4>
                    </div>
                    <div>
                        <h4>Price : {price}</h4>
                    </div>
                    <div>
                        <h4>Brand : {company}</h4>
                    </div>
                    <div>
                        <h4>category : {category}</h4>
                    </div>
                    <div>
                        <h4>Stock : {stock}</h4>
                    </div>                    
                </div>
            </div>
            <form className="product_add_form">
                <input type="file" onChange={(e)=>{setPhoto(URL.createObjectURL(e.target.files[0]))}} className="inputField" />
                <input type="text" placeholder="product name" required className="inputField" name="name" onChange={(e)=>{setName(e.target.value)}} />
                {error && !name && <span>Enter Valid Name</span>}
                <input type="number" placeholder="product price" className="inputField" name="price" onChange={(e)=>{setPrice(e.target.value)}} />
                {error && !price && <span>Enter Valid Price</span>}
                <input type="text" placeholder="product category" className="inputField" name="category" onChange={(e)=>{setCategory(e.target.value)}} />
                {error && !category && <span>Enter Valid category</span>}
                <input type="text" placeholder="product company" className="inputField" name="company" onChange={(e)=>{setCompany(e.target.value)}} />
                {error && !company && <span>Enter Valid Company</span>}
                <textarea className="inputField" value={desc} onChange={(e)=>{setDesc(e.target.value)}} ></textarea>
                <input type="number" className="inputField" value={stock} onChange={(e)=>{setStock(e.target.value)}} placeholder="stock"/>
               <input type="button" className="add_button" onClick={onSubmitHandler} name="update" value="Add Product" />               
            </form>
        </div>
    )
}


export default AddProduct;