import {useEffect} from 'react';

import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

import {getProducts} from '../../../redux/actions/productActions'; 
import {useDispatch,useSelector} from 'react-redux';

import {Box,styled} from '@mui/material';

const Component=styled(Box)`
      padding:10px;
      background: #F2F2F2;
      `
const Home=()=>{

   const {products}= useSelector(state=> state.getProducts)  //store ke andar se state tab ke state me se getProducts ko access kiya
   console.log(products);
    const dispatch=useDispatch();
     useEffect( ()=>{                 //useEffct takes 2 arguements callback function &a dependency
        dispatch(getProducts())       //here getProduts is the function used in api inside productActions file
    } , [dispatch])                            //for mounting the dependency is empty, to show value on update value inside dependenvcy has to be passed
    return(
        <>
            <NavBar/>
            <Component>
            <Banner/>

            <MidSlide products={products} title="Deal of the Day" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discounts for You" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selection "timer={false}/>
            <Slide products={products} title="Recommended Items"timer={false}/>
            <Slide products={products} title="Trending Offers"timer={false}/>
            <Slide products={products} title="Season's Top pick"timer={false}/>
            <Slide products={products} title="Top Deals on Accessories"timer={false}/>
            </Component>
            
        </>
    )
}

export default Home;