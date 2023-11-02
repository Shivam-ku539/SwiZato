import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// import About from './components/aboutUs/About' ;
import Cart from './components/Cart';
import Error from './components/Error';
import Body from './components/body/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';

const About=lazy(()=>import('./components/aboutUs/About'));

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Body/>
    },{
      path:"/about",
      element:<Suspense fallback={<Shimmer/>} ><About/></Suspense> 
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/restaurant/:resId",
      element:<RestaurantMenu/>
    }
  ],
    errorElement:<Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
