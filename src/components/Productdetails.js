import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {
    
    useParams,Link  } from "react-router-dom";

import {useSelector,  useDispatch} from "react-redux";
import { Productdetail,RemoveProduct } from '../Action/Productaction';

import { reducer } from '../Reducer/index';

const Productdetails = () => {

    
    const par=useParams();
    console.log(par);

   const id=par.id;
   console.log(id);
   const Product = useSelector(state => state.detailsproduct.products);
   const dispatch = useDispatch();
    const getAllProduct= () =>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            console.log(response.data);
            const sr=response.data;
           
            dispatch(Productdetail(sr));
           
           
        
        })
        .catch(err => console.log("Error Found"));
    }

    useEffect(() => {

      console.log("outside");

       if(id && id!==''){
         console.log("inside");
       getAllProduct();}

       return ()=>{
         console.group("cleanup");
         dispatch(RemoveProduct());
       }
       
    },[id])
    return (
        <div >
        {Object.keys(Product).length===0?<div>Loading</div>:

            <div key={Product.id} className="card mb-3" style={{maxWidth: "1000px",backgroundColor:"lightblue",marginTop:'100px',marginLeft:'150px'}}>
              <div className="row g-0">
                <div className="col-md-4" >
                  <img src={Product.image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{Product.title}</h3>
                    <p className="card-text">{Product.category}</p>
                    <p className="card-text">{Product.description}</p>
                    <h3 >Price: {Product.price}</h3>
                    <h3 >Rating: {Product.rating.rate}</h3>
                    <Link to="/" className="btn btn-primary">Go Back</Link>
                  
                  </div>
                </div>
              </div>
            </div>
            
                    }</div>
        
    )
}
export default Productdetails
