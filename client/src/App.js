// import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Home from './components/header/home/Home';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';       //BrowserRouter-to enable router in website anfd then wrap whole application with BrowserRouter
import DetailView from './components/details/DetailView';
import {Box} from '@mui/material';

function App() {
  return (
    <DataProvider >

      <BrowserRouter>
      <Header/>
      <Box style={{marginTop:54}}>

        {/*jis me routing chaiye usko routes se wrap kardo*/}
        <Routes>
       <Route path='/' element= {<Home/>}/>   {/*for url based routing we use route*/}
        <Route path='/product/:id' element={<DetailView/> }/>        
        </Routes>
      </Box>
      </BrowserRouter>

    </DataProvider>
  );
}

export default App;
