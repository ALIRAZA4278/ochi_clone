import About from "./Components/About"
import Eyes from "./Components/Eyes"
import LandingPage from "./components/LandingPage"
import Marquee from "./Components/Marquee"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white m-0 p-0 box-border'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
    </div>
  )
}

export default App
