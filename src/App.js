import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import heroDog5 from "./assets/catHero.webp"
import OurServices from './components/OurServices';
import Footer from './components/Footer';
import ServiceInfo from './components/ServiceInfo';
import Combine from './components/Combine';
import HeaderWithoutBack from './components/HeaderWithoutBack';
import About from './components/About';


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Header />,
},
{
  path:"/serviceinfo",
  element:<HeaderWithoutBack />,
  children:[
    {
      path:"/serviceinfo/:id",
      element:<ServiceInfo />
    }
  ]
},
{
  path:"/about",
  element:<About />,
  children:[
    {
      path:"/about",
      element:<HeaderWithoutBack />
    }
  ]
}
])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
