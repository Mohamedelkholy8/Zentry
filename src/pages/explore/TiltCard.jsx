import { useRef, useState } from "react";

const TiltCard = ({ children, className, id }) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();

    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const rotateX = (relativeY - 0.5) * 5;
        const rotateY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.95, 0.95, 0.95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    };

    return (
        <div
            ref={itemRef}
            id={id}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: transformStyle,
                transition: "transform 0.2s ease-out"
            }}
            className={className}
        >
            {children}
        </div>
    );
};

export default TiltCard;
