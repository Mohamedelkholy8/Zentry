import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../Button";
import video from "./../../assets/Zentry_Token.mp4"
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

function Symbiotic() {

    const videoElement = document.querySelector('video')
    useGSAP(() => {


        function videoScrub(video, vars) {
            video = gsap.utils.toArray(video)[0];
            let once = (el, event, fn) => {
                let onceFn = function () {
                    el.removeEventListener(event, onceFn);
                    fn.apply(this, arguments);
                };
                el.addEventListener(event, onceFn);
                return onceFn;
            },
                prepFunc = () => { video.play(); video.pause(); },
                prep = () => once(document.documentElement, "touchstart", prepFunc),
                src = video.currentSrc || video.src,
                tween = gsap.fromTo(video, { currentTime: 0 }, { paused: true, immediateRender: false, currentTime: video.duration || 1, ease: "none", ...vars }),
                resetTime = () => (tween.vars.currentTime = video.duration || 1) && tween.invalidate();
            prep();
            video.readyState ? resetTime() : once(video, "loadedmetadata", resetTime);
            return tween;
        }


        // videoScrub(videoElement, {
        //     scrollTrigger: {
        //         trigger: '#symbiotic',
        //         start: "top top",
        //         scrub: true,
        //         pin: true,
        //         //   markers:true
        //     },
        // })
        let splitSymp = SplitText.create("#splitSymp", { type: "words" });


        gsap.from(splitSymp.words, {
            delay: 0.5,
            opacity: 0,
            stagger: 0.1,
            duration: 0.000001,
            scrollTrigger: {
                start: 'top 90%',
                trigger: '#splitSymp',
                toggleActions: "play reverse play reverse"
            }
        })
        gsap.from('#splitSymp', {
            delay: 0,
            x: -150,
            y: 150,
            duration: 2,
            ease: 'power3.out',
            rotateX: -50,
            rotateY: -50,
            scrollTrigger: {
                start: 'top 100%',
                trigger: '#splitSymp',
                toggleActions: "play reverse play reverse"
            }
        })
    })
    return (
        <div className="h-screen w-screen" id="symbiotic">
            <div id="sympTittle" className="p-8">
                <h3 id='splitSymp' className="text-6xl font-black pb-16 ">The symbiotic world<br />powered by ZENT</h3>
                <Button content={"ENTER VALUT"} useIcon={false} bgColor={'black'} textColor={'#DFDFF2'} />
            </div>
            <div className="flex justify-center ">
                <div className="w-1/2"></div>
                <video src={video} ref={videoElement} className="w-1/2 lg:w-[30%]"></video>
            </div>
        </div>
    )
}

export default Symbiotic