import {createStore, combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {getProductsReducer,getProductDetailsReducer} from './reducers/productReducer'

const middleware=[thunk];

const reducer= combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
});


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)
export default store;