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
}
])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />



      {/* <div className='w-full h-[700px] bg-center bg-cover p-10' style={{backgroundImage: `url(${heroDog5})`}}>
        <Header />
        <RouterProvider router={appRouter} />
      </div> */}
      {/* <OurServices />
      <Footer /> */}
    </div>
  );
}

export default App;
