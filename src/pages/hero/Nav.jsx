import img from './../../assets/logo.png'
import Ui from '../Ui'
import Button from '../Button'
import gsap from "gsap"
import { Observer } from "gsap/Observer"
import { useGSAP } from '@gsap/react'
import { useRef, useEffect } from 'react'

gsap.registerPlugin(Observer)

function Nav({colors , setColors , isProduct , setProduct}) {
  const navRef = useRef(null)
  const isProductRef = useRef(isProduct)

  useEffect(() => {
    isProductRef.current = isProduct
    if (isProduct) {
      gsap.to(navRef.current, {
        y: "0%",
        duration: 0.6,
        ease: "power3.out"
      })
    }
  }, [isProduct])

  useGSAP(() => {
    const hideNav = () => {
      if (isProductRef.current) return;
      gsap.to(navRef.current, {
        y: "-125",
        duration: 0.6,
        ease: "power3.out"
      })
    }

    const showNav = () => {
      if (isProductRef.current) return;
      gsap.to(navRef.current, {
        y: "0%",
        duration: 0.6,
        ease: "power3.out"
      })
    }
    
    Observer.create({
      target: window,
      type: "wheel,touch,scroll",
      tolerance: 50,
      onDown: hideNav,
      onUp: showNav
    })
  })

  return (
    <nav
      ref={navRef}
      className={`fixed top-[2%] left-1/2   -translate-x-1/2 w-[98%] rounded p-4 bg-[${isProduct ? 'transparent' : 'black'}] text-[#DFDFF2] font-medium text-xs z-[100] border border-[${isProduct ? 'transparent' : colors.text}]`}
    >
      <ul className="flex justify-between ">
        <div className='flex items-center gap-3 '>
          <img src={img} alt="" className='w-24'/>
          <div  onClick={() => setProduct(!isProduct)} className='cursor-pointer flex items-center gap-3'>
            <Button content='Products' useIcon={true} bgColor={'#DFDFF2'} textColor={'black'} />
          </div>
        </div>
        <Ui />
      </ul>
    </nav>
  )
}

export default Nav
