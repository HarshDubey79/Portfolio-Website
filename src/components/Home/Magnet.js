import { useRef, useState } from "react";

function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
  style = {},
}) {
  const ref = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (event) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = event.clientX - centerX;
    const distY = event.clientY - centerY;
    const withinX = event.clientX > rect.left - padding && event.clientX < rect.right + padding;
    const withinY = event.clientY > rect.top - padding && event.clientY < rect.bottom + padding;

    if (withinX && withinY) {
      setIsActive(true);
      setTranslate({ x: distX / strength, y: distY / strength });
    } else {
      setIsActive(false);
      setTranslate({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setTranslate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export default Magnet;