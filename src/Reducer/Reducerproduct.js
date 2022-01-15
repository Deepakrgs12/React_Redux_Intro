import { Typeconstant } from "../Constant/Typeconstant";


const initialstate={
    products:[
      

]
}
export const seeproductreducer=(state=initialstate,{type,payload})=>{
switch (type) {
    case Typeconstant.SEE_PRODUCT:
        return {...state, products:payload};
        
        break;

    default:
        return state;
};
};

export const productdetailsreducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case Typeconstant.PRODUCT_DETAILS:
            return {...state, products:payload};
            
            
        case Typeconstant.REMOVE_PRODUCT:
                return initialstate;
                
        default:
            return state;
    };
    };

    // export const removeproductreducer=(state=initialstate,{type,payload})=>{
    //     switch (type) {
    //         case Typeconstant.REMOVE_PRODUCT:
    //             return {};
                
    //             break;
        
    //         default:
    //             return state;
    //     };
    //     };