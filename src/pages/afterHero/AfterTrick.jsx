import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);


function AfterTrick() {
  const trickRef = useRef(null);
  useGSAP(() => {
    const trick = trickRef.current;

    const initialRotationX = gsap.getProperty(trick, "rotationX") || 0;
    const initialRotationY = gsap.getProperty(trick, "rotationY") || 0;
    const initialX = gsap.getProperty(trick, "x") || 0;
    const initialY = gsap.getProperty(trick, "y") || 0;

    const rotXTo = gsap.quickTo(trick, "rotationX", { duration: 1, ease: "power3.out" });
    const rotYTo = gsap.quickTo(trick, "rotationY", { duration: 1, ease: "power3.out" });
    const posXTo = gsap.quickTo(trick, "x", { duration: 1, ease: "power3.out" });
    const posYTo = gsap.quickTo(trick, "y", { duration: 1, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const xPercent = (e.clientX / window.innerWidth) - 0.5;
      const yPercent = (e.clientY / window.innerHeight) - 0.5;

      const rotSensitivity = 10;
      const transSensitivity = 30; // Max 30px shift

      const newRotX = initialRotationX - (yPercent * rotSensitivity);
      const newRotY = initialRotationY + (xPercent * rotSensitivity);
      const newPosX = initialX + (xPercent * transSensitivity);
      const newPosY = initialY + (yPercent * transSensitivity);

      rotXTo(newRotX);
      rotYTo(newRotY);
      posXTo(newPosX);
      posYTo(newPosY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    gsap.fromTo(trick,
      {
        width: '300px',
        height: '400px',
        borderRadius: '16px',
        rotateZ: 0,
        rotateX: 10,
        rotateY: 20,
        x: 0,
        y: 0,
      },  {
      scrollTrigger: {
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: 0.5,
        trigger: '#trickWindow',
        onEnter: () => {
          // Remove listener when scroll animation starts
          window.removeEventListener("mousemove", handleMouseMove);
        },
        onLeaveBack: () => {
          // Add listener back when returning to start
          window.addEventListener("mousemove", handleMouseMove);
        }
      },
      rotateZ: 0,
      rotateX: 0,
      rotateY: 0,
      x: 0,
      y: 0,
      width: '100vw',
      height: '100vh',
      borderRadius: 0
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return (
    <div id="trickWindow" className="relative h-screen w-screen flex justify-center items-center overflow-visible">
      <div ref={trickRef} className="w-[300px] h-[400px] trickBox"></div>
      <div className="absolute bottom-16 text-center text-[9px] font-medium z-[100] ">
        <h6 className="font-semibold">A Programmable reality for Human-AI co-evolution</h6>
        <p className="opacity-[0.5]">Your journy fuels richer data, smarter agents, and<br/>cicilization-scale intelligence, all white<br/>rewarding you.</p>
      </div>
    </div>
  )
}
export default AfterTrick