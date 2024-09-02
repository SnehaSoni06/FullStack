import * as actionTypes from '../constants/productConstant';

 export const getProductsReducer = (state={products:[]},action) => {       //1. this expects a return statement otherwise UI will break 2. After dispatch values come inside action
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {products:action.payload}
            case actionTypes.GET_PRODUCTS_FAIL:
                return {error:action.payload}

                default:
                    return state

    }
    
    
 }