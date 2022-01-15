import { Typeconstant } from "../Constant/Typeconstant"
export const SeeProduct=(product)=>{
    return {
        type:Typeconstant.SEE_PRODUCT,
        payload:product    };
};

export const Productdetail=(product)=>{
    return {
        type:Typeconstant.PRODUCT_DETAILS,
        payload:product    };
};

export const RemoveProduct=()=>{
    return {
        type:Typeconstant.REMOVE_PRODUCT,
           };
};