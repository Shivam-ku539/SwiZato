import React from 'react';
import './App.css';
import Header from './components/Header';
// import Body from './components/body/Body';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './reduxStore/appStore';

function App() {
  return (
   <>
   <Provider store={appStore}>
   <Header />
   <Outlet/>
   {/* <Body /> */}
   </Provider>
   </>
  )
      }
export default App;