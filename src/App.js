import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import './App.css' 

import{ NavBar, Exchanges, Homepage, Currencies, News, CryptoDetails}from './components';

function App() {
  return (
    <div className='app'>
      <div className='navbar'> 
       <NavBar />
      </div>
      <div className='main'>
       <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage/>}>
              </Route>
              <Route path='/exchanges' element={<Exchanges/>}>
              </Route>
              <Route path='/cryptocurrencies' element={<Currencies/>}>
              </Route>
              <Route path='/crypto/:coinId' element={<CryptoDetails/>}>
              </Route>
              <Route path='/news' element={<News/>}>
              </Route>
            </Routes>
          </div>


       </Layout>
        </div>
        <div className='footer'> 

        </div>
    </div>
  );
}

export default App;
