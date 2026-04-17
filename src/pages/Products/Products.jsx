import { useGSAP } from "@gsap/react";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createPortal } from "react-dom";

function Products({ isProduct }) {
    const [isRendered, setIsRendered] = useState(isProduct);
    const tl = useRef(null);

    let [productCounter, setProductCounter] = useState(0)

    const nextProduct = () => {
        setProductCounter((prev) => prev + 1)
    }

    const prevProduct = () => {
        setProductCounter((prev) => prev - 1)
    }

    // 1. Sync React state and trigger the exit animation
    useEffect(() => {
        if (isProduct) {
            setIsRendered(true); // mount immediately
        } else if (tl.current) {
            // play GSAP timeline in reverse, then unmount!
            tl.current.reverse().then(() => {
                setIsRendered(false);
            });
        } else {
            setIsRendered(false);
        }
    }, [isProduct]);

    // 2. Handle body scroll locking only when active
    useEffect(() => {
        if (isRendered) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "auto";
            };
        }
    }, [isRendered]);

    // 3. Your central animations timeline
    useGSAP(() => {
        if (!isRendered) return;

        // Create a single master timeline for all enter/exit animations
        tl.current = gsap.timeline();

        // 🎯 CHAIN ALL YOUR ANIMATIONS HERE!
        // Because they're on a single timeline, they will ALL automatically reverse
        // in perfect backwards order when closing the products page.
        tl.current.from(".products", {
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        tl.current.from(".productH", {
            opacity: 0,
            duration: 0.000001,
        }, '<')
        tl.current.from(".productH", {
            x: -150,
            y: 150,
            duration: 1,
            ease: 'power3.out',
            rotateX: -50,
            rotateY: -50,

        }, '<')
        tl.current.from(".productP", {
            opacity: 0,
            duration: 0.5,
            y: 50,
            stagger: 0.2,
        }, '<')
        tl.current.from('.productContainerEntrance', {
            rotateY: 90,
            duration: 1,
            scale: 0.8,
            ease: 'power3.out'
        }, '<')

        const productTriggers = [];

        function rotateProducts(card, index) {
            productTriggers.push(
                ScrollTrigger.create({
                    trigger: card,
                    scroller: '.products', // This makes it work on the product modal scroll!
                    start: '50% top',
                    onEnter() {
                        // Setting index directly is safer than +1 to avoid bugs when scrolling too fast
                        setProductCounter(index)
                    },
                    onLeaveBack() {
                        // Less one when we leave by scrolling back up
                        setProductCounter(index > 0 ? index - 1 : 0)
                    }
                })
            );
        }
        rotateProducts('.productItem1', 0)
        rotateProducts('.productItem2', 1)
        rotateProducts('.productItem3', 2)
        rotateProducts('.productItem4', 3)
        rotateProducts('.productItem5', 4)

        return () => {
            productTriggers.forEach(st => st.kill());
        };
    }, { dependencies: [isRendered] });

    const handleMouseMove = (e) => {
        if (tl.current && tl.current.isActive()) return;

        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.to('.productContainerEntrance', {
            rotateY: x * 15,
            rotateX: -y * 15,
            duration: 1,
            ease: 'power2.out'
        });
    };

    if (!isRendered) return null;

    return createPortal(
        <div onMouseMove={handleMouseMove} className="fixed products inset-0 bg-black z-[10] overflow-y-auto">
            <div class="fixed inset-0 -z-10 flex items-center justify-center pointer-events-none">
                <div class="w-full h-full rounded-full 
                            bg-[radial-gradient(circle,#100730_0%,rgba(16,7,48,0)_70%)]">
                </div>
            </div>
            {/* Wrapper handles the positioning and centering (translate-y-[-50%]) */}
            <div className="w-1/2 fixed right-10 top-[50%] translate-y-[-50%] h-[50vh] " style={{ perspective: "2500px" }}>
                {/* Inner container handles the GSAP entrance animation */}
                <div className="productContainerEntrance w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Inner container handles the 3D perspective and rotations */}
                    <div
                        style={{
                            transform: `rotateY(${-productCounter * 72}deg) rotateX(${productCounter * 2}deg) rotateZ(-5deg)`,
                            transition: 'transform 1.5s ease'
                        }}
                        className="productContainer relative w-full h-full ">
                        <div className="productCard1 w-[60%] absolute left-[50%]  top-[50%]  aspect-[1/1.5] ">
                            <div className="w-[80%] aspect-[1/1.5] bg-[#240E4B] border-gray-600 border absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] rounded-xl "></div>
                        </div>
                        <div className="productCard2 w-[60%] absolute left-[50%]  top-[50%] aspect-[1/1.5] ">
                            <div className="w-[80%] aspect-[1/1.5] bg-[#240E4B] border-gray-600 border absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] rounded-xl "></div>
                        </div>
                        <div className="productCard3 w-[60%] absolute left-[50%]  top-[50%] aspect-[1/1.5] ">
                            <div className="w-[80%] aspect-[1/1.5] bg-[#240E4B] border-gray-600 border absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] rounded-xl "></div>
                        </div>
                        <div className="productCard4 w-[60%] absolute left-[50%]  top-[50%] aspect-[1/1.5] ">
                            <div className="w-[80%] aspect-[1/1.5] bg-[#240E4B] border-gray-600 border absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] rounded-xl "></div>
                        </div>
                        <div className="productCard5 w-[60%] absolute left-[50%]  top-[50%] aspect-[1/1.5] ">
                            <div className="w-[80%] aspect-[1/1.5] bg-[#240E4B] border-gray-600 border absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] rounded-xl "></div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="w-1/2 mt-[50vh] h-screen xl:h-[165%]  ml-10 z-[10] ">
                <li style={{ color: productCounter === 0 ? 'white' : '#5542FF' }} className="productItem1 hover:text-white w-fit">
                    <p className="text-[6px] translate-y-[16px]  font-medium productP">ZAPP LAYER</p>
                    <h3 className="text-[54px] xl:text-[80px] font-black productH">ZTERMINAL</h3>
                </li>
                <li style={{ color: productCounter === 1 ? 'white' : '#5542FF' }} className="productItem2 hover:text-white w-fit">
                    <p className="text-[6px] translate-y-[16px] font-medium productP">AGENTIC AI LAYER</p>
                    <h3 className="text-[54px] xl:text-[80px] font-black productH">ZAI</h3>
                </li>
                <li style={{ color: productCounter === 2 ? 'white' : '#5542FF' }} className="productItem3 hover:text-white w-fit">
                    <p className="text-[6px] translate-y-[16px] font-medium productP">DATA LAYER</p>
                    <h3 className="text-[54px] xl:text-[80px] font-black productH">ZDATA</h3>
                </li>
                <li style={{ color: productCounter === 3 ? 'white' : '#5542FF' }} className="productItem4 hover:text-white w-fit">
                    <p className="text-[6px] translate-y-[16px] font-medium productP">ZAPP</p>
                    <h3 className="text-[54px] xl:text-[80px] font-black productH">RADIANT</h3>
                </li>
                <li style={{ color: productCounter === 4 ? 'white' : '#5542FF' }} className="productItem5 hover:text-white w-fit">
                    <p className="text-[6px] translate-y-[16px] font-medium productP">ZAPP</p>
                    <h3 className="text-[54px] xl:text-[80px] font-black productH">ZIGMA</h3>
                </li>
            </ul>
        </div>,
        document.body
    );
}

export default Products;