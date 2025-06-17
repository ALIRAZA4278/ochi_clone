import About from "./Components/About"
import Cards from "./Components/Cards"
import Eyes from "./Components/Eyes"
import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import LandingPage from "./Components/LandingPage"
import Marquee from "./Components/Marquee"
 

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white m-0 p-0 box-border'>
      <Header/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Features/>
      <Cards/>
      <Footer/>
      {/* 2.10 */}

    </div>    
  )
}

export default App
