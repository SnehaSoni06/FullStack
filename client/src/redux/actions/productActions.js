//using actions to call api using this we will call reducers

import axios from "axios";
import * as actionTypes from '../constants/productConstant';

 const URL="http://localhost:8000";

export const getProducts = ()=>async(dispatch)=>{
    try{
        const{data}= await axios.get(`${URL}/products`);
        
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload:data})    //dispatch internally calls the reducer
    } catch(error){
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload:error.message})
    }

}