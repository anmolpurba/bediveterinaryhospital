import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import heroDog5 from "./assets/catHero.webp"
import OurServices from './components/OurServices';

function App() {
  return (
    <div>
      <div className='w-full h-[700px] bg-center bg-cover p-10' style={{backgroundImage: `url(${heroDog5})`}}>
        <Header />
        <Hero />
      </div>
      <OurServices />
    </div>
  );
}

export default App;
