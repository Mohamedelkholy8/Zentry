import './App.css'
import AfterHero from './pages/afterHero/AfterHero'
import Nav from './pages/hero/Nav'
import Transition from './pages/Transition/Transition'

import Hero from "./pages/hero/Hero"
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from 'react';
import Explore from './pages/explore/Explore';
import Symbiotic from './pages/symbiotic/Symbiotic';
import { useState } from 'react'
import Glance from './pages/glance/Glance';
import Partner from './pages/partners/Partner'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'
import Products from './pages/Products/Products'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [colors, setColors] = useState({
    text: 'black' ,
    background: '#DFDFF2'
  })
  let [isProduct , setProduct] = useState(false)
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 0.5,
      effects: true,
      smoothTouch: 0.1
    });
  }, []);

  return (
    <>
      <Nav colors={colors} setColors={setColors} isProduct={isProduct} setProduct={setProduct} />
      <div id="smooth-wrapper">
        <div id='smooth-content' className={`min-h-screen bg-[${colors.background}] relative transition-colors duration-500 ease-in-out`}>
          <Products isProduct={isProduct} setProduct={setProduct} />
          <Hero />
          <AfterHero />
          <Explore />
          {/* <Symbiotic /> */}
          <Transition colors={colors} setColors={setColors}/>
          <Glance colors={colors} setColors={setColors}/>
          <Partner />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
