import {combineReducers} from 'redux';
import {seeproductreducer} from '../Reducer/Reducerproduct';
import { productdetailsreducer } from '../Reducer/Reducerproduct';


export const reducer = combineReducers({
allproduct: seeproductreducer,
detailsproduct: productdetailsreducer,

});
