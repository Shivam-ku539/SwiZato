import React from 'react';
import './App.css';
import Header from './components/Header';
// import Body from './components/body/Body';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <>
   <Header />
   <Outlet/>
   {/* <Body /> */}
   </>
  )
      }
export default App;