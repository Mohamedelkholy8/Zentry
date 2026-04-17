import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);



function Button({ content, useIcon , bgColor , textColor}) {
    const btnRef = useRef(null);
    const insideButton = useRef(null)

useGSAP(() => {
  const btn = btnRef.current;
  const inside = insideButton.current
  let ySetter = gsap.quickSetter(btn, "rotationY" , 'deg');
  let xSetter = gsap.quickSetter(btn, "rotationX" , 'deg');
  let zSetter = gsap.quickSetter(btn, "rotationZ" , 'deg');

  btn.addEventListener("mouseenter", () => {
    gsap.fromTo(inside, {
      opacity: 0.2,
      y: 10,
      duration: 0.1,
      rotateX: 0 ,
      ease: "power3.out"
    }, {
      opacity: 1,
      y: 0,
      rotateX: 20
    });
    btn.addEventListener('mousemove' , (e) => {
        ySetter((e.pageX / 8) + 10); 
        xSetter(5); 
        zSetter(2);
    })
  });
  btn.addEventListener("mouseleave", () => {
   
      
      gsap.fromTo(inside, {
          opacity: 0.2,
          y: -10,
          duration: 0.1,
          ease: "power3.out"
        }, {
            opacity: 1,
            y: 0,
        });
        ySetter(0); 
        xSetter(0); 
        zSetter(0)
  });
});



    return (
        <div className={`bg-[${bgColor}] z-10 px-4 py-1 rounded-2xl cursor-pointer w-fit text-[${textColor}] text-sm transition-all duration-500 ease-in-out hover:rounded  transform:perspective(1000px)  `} ref={btnRef}>
            <div id="buttonContent" className="cursor-pointer flex items-center gap-1 w-full h-full cursor-default font-medium text-xs" ref={insideButton}>
                <span>{content}</span>
                {useIcon &&
                    <svg className="w-2 h-2" width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="5,10 50,45 95,10 50,95" fill="black" />
                    </svg>
                }
            </div>
            
        </div>
    )
}

export default Button