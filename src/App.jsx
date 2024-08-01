import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Component/Layout/Layout';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Portfolio from './Component/Portfolio/Portfolio';
import Error from './Component/Error/Error';
import Contact from './Component/Contact/Contact';





 const route= createBrowserRouter([
  {path:"/React-app1",element:<Layout/> ,children:[
      {index:true,element:<Home/> },
      { path: 'Home',element:<Home/> },
      { path: 'About',element:<About/> },
      { path: 'Portfolio',element:<Portfolio/> },
      { path: 'Contact',element:<Contact/> },
      { path: "*",element:<Error/> },
  ]}
 ])
export default function App() {
 
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}


