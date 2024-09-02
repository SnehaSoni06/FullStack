
import Slide from './Slide';
import {Box} from '@mui/material';

const MidSlide=({ products, title, timer})=>{   //destructring
    // const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
        return(
    <Box>
        <Box>   {/*left box*/}
           <Slide 
            products={products}
           title={title} 
            timer={timer}/> 
        </Box>            {/*right box*/}

        <Box>
             {/* <img src={adURL} style={{width: 217}} alt='ad'/> */}
        </Box>
    </Box>

        )
}

export default MidSlide;