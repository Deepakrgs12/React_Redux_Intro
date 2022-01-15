import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useSelector,  useDispatch} from "react-redux";
import { SeeProduct } from '../Action/Productaction';
import { reducer } from '../Reducer/index';
import {Link} from 'react-router-dom'


const Productlist = () => {

    const Product = useSelector(state => state.allproduct.products);
    const dispatch = useDispatch();
    
    const getAllProduct= () =>{
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            const sr=response.data;
            dispatch(SeeProduct(sr))
           // setProduct(sr);
           
           
        
        })
        .catch(err => console.log("Error Found"));
       
    }

    useEffect(() => {
       getAllProduct();
       
    }, [])
    return (
        <div>
            <div className="row">
 
{Product.length==0?<div>Loading...</div>:Product.map((pr)=>(
     <div className="col-sm-4" style={{backgroundColor:"ButtonHighlight"}}>
         <Link to={`Product/${pr.id}`}>
    <div value={pr.id} className="card mb-3" style={{backgroundColor:"lightblue"}}>
    <img src={pr.image} className="card-img-top" alt="..." style={{width:"250px",height:"250px"}}/>
    <div className="card-body">
      <h5 className="card-title">{pr.title}</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  </Link>
  </div>
))}
        </div>
        </div>
    )
}
export default Productlist
