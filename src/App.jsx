import About from "./Components/About"
import Cards from "./Components/Cards"
import Eyes from "./Components/Eyes"
import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import LandingPage from "./Components/LandingPage"
import Marquee from "./Components/Marquee"
import LocomotiveScroll from 'locomotive-scroll';
import Ready from "./Components/Ready"
import Clients from "./Components/Clients"




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white m-0 p-0 box-border'>
      <Header/>
      <LandingPage/>
       <Marquee/>
       <About/>
       <Eyes/>
     <Features/>
     <Clients/>
      <Cards/>
      <Ready/>  
       <Footer/>      


    </div>    
  )
}

export default App
