
import { navData } from '../../../constants/data';   //NavBar.jsx is located in client/src/components/header/home data.js is located in client/src/constants

import {Box,styled,Typography} from '@mui/material';  //typography sets margin padding to 0

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))


const Container= styled(Box)`
   padding: 12px 8px;
    text-align: center;       
`  //text-align se image will be centred with text 

const Text=styled(Typography)`  
     font-size:14px;   
     font-weight:600;
     font-family:inherit;            
     `
                    
const NavBar =()=>{
    return(
    
      <Component>
            {
                navData.map(data => (
                    <Container>
                        <img src={data.url} alt="nav" style={{width:64}} />
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
    
        
    )

}

export default NavBar;