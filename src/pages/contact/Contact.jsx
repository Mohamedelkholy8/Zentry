import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/SplitText";
import Button from "../Button";

import img1 from './../../assets/contactImgs/contact-1.png'
import img2 from './../../assets/contactImgs/contact-2.png'
import img3 from './../../assets/contactImgs/contact-3.png'
gsap.registerPlugin(SplitText ,ScrollTrigger);
function Contact() {

    useGSAP(() => {
        let glanceP = SplitText.create("#contactP", { type: "words"});
        let glanceH = SplitText.create("#contactH", { type: "words"});
        
        gsap.from(glanceP.words, {
            delay:0.5,
            opacity: 0,
            stagger: 0.2,
            duration: 0.000001,
            scrollTrigger:{
                start:'top bottom',
                end:'top -20%',
                trigger:'#contactP',
                toggleActions: "play reverse play reverse"
            }
        });

        gsap.from(glanceH.words, {
            delay:0.5,
            opacity: 0,
            stagger: 0.1,
            duration: 0.000001,
            scrollTrigger:{
                start:'top bottom',
                end:'top -20%',
                trigger:'#contactP',
                toggleActions: "play reverse play reverse"
            }
        });

        gsap.from('#contactH', {
            delay:0,
            x:-150,
            y:150,
            duration:2 ,
            ease:'power3.out',
            rotateX: -50,
            rotateY: -50,
             scrollTrigger:{
                start:'top bottom',
                end:'top -170%',
                trigger:'#contactP',
                toggleActions: "play reverse play reverse",
                // markers:true
            }
        });
        gsap.from('#contactImg1', {
            delay:0,
            x:-150,
            y:150,
            duration:1 ,
            ease:'power3.out',
            rotateX: 50,
            rotateY: -80,
             scrollTrigger:{
                start:'top bottom',
                end:'top -170%',
                trigger:'#contactP',
                toggleActions: "play reverse play reverse",
                // markers:true
            }
        });
        gsap.from('#contactImg2', {
            delay:0,
            x:-150,
            y: -150,
            duration:1 ,
            ease:'power3.out',
            rotateX: -50,
            rotateY: 50,
             scrollTrigger:{
                start:'top bottom',
                end:'top -170%',
                trigger:'#contactP',
                toggleActions: "play reverse play reverse",
                // markers:true
            }
        });
        gsap.from('#contactImg3', {
            delay:0,
            x:150,
            y: 150,
            duration:1 , 
            ease:'power3.out',
            rotateX: 50,
            rotateY: -50,
             scrollTrigger:{
                start:'top bottom',
                end:'top -170%',
                trigger:'#contactP',
                toggleActions: "play reverse play reverse",
                // markers:true
            }
        });
    })
    return (
        <div id="contact" className="bg-white w-screen aspect-[3/1.25] p-7 flex justify-center items-center relative overflow-hidden">
            <div className=" relative overflow-hidden w-full h-full  bg-black rounded-lg ">
                <div className="w-full h-full overflow-hidden flex items-center justify-center">
                    <div className=" flex flex-col items-center justify-center w-fit h-fit gap-5">
                        <p id="contactP" className="z-10 text-[6px] text-white">JOIN ZENTRY</p>
                        <h2 id="contactH" className="z-10 text-white w-fit h-fit text-4xl leading-none lg:text-6xl xl:text-7xl font-extrabold text-center">
                            Build the foundation <br/>for tomorrow’s <br/>civilization.
                        </h2>
                        <Button  content="CONTACT US" useIcon={false} bgColor="#DFDFF2" textColor="black"/>
                        
                    </div>
                </div>
                <img src={img3} id="contactImg2" className="w-[15%] aspect-[1/1.5] rounded-lg left-[140px] -top-20 xl:-top-[160px] rotate-x-60 rotate-z-60 absolute" alt=""/>
                <img src={img2} id="contactImg3" className="w-[15%] aspect-[1/1.5] rounded-lg left-20 -bottom-[80px] xl:-bottom-[160px] rotate-x-60 rotate-z-60 absolute" alt=""/>
            </div>
            <img src={img1} id="contactImg1" className="w-[20%] aspect-[1/1.5] rounded-lg right-14 top-20 rotate-x-60 rotate-z-60 absolute" alt=""/>
        </div>
    );
}

export default Contact;