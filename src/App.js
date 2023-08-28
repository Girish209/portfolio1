import "./styles/app.scss"
import Header, { NavResponsive } from "./components/Header";
import Homepage from "./components/Homepage";
import Work from "./components/Work.jsx";
import Timeline from "./components/Timeline.jsx"
import Services from "./components/Services";
import Contact from "./components/Contact.js"
import Footer from "./components/Footer.js"
import { useEffect, useState } from "react";
function App() {
  const[menuOpen,setMenuOpen]=useState(false);
  const[ratio,setRatio]=useState(window.innerWidth/window.innerHeight)
  useEffect(()=>{
    const resizeRatio=()=>{
      setRatio(window.innerWidth/window.innerHeight)
    };
    window.addEventListener("resize",resizeRatio);
    return ()=>{
      window.removeEventListener("resize",resizeRatio);
    };
  },[ratio])
  return ratio>2?(
    <>
      <NavResponsive menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Homepage/>
      <Work/>
      <Timeline/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  ):<em className="customMessage">Please Change the screen ratio to view</em>
}

export default App;
