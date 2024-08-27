import {createStore, combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware=[thunk];

const reducer= combineReducers({
    getProducts:getProductsReducer
})
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;