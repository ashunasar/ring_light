import { useEffect, useRef } from "react";
import "./LightScreen.css";

interface LightScreenProps {
  brightness: number;
  temperature: number;
}

function kelvinToRGB(kelvin: number) {
  const temp = kelvin / 100;
  let red: number, green: number, blue: number;

  if (temp <= 66) {
    red = 255;
    green = temp;
    green = 99.4708025861 * Math.log(green) - 161.1195681661;

    if (temp <= 19) {
      blue = 0;
    } else {
      blue = temp - 10;
      blue = 138.5177312231 * Math.log(blue) - 305.0447927307;
    }
  } else {
    red = temp - 60;
    red = 329.698727446 * Math.pow(red, -0.1332047592);

    green = temp - 60;
    green = 288.1221695283 * Math.pow(green, -0.0755148492);

    blue = 255;
  }

  return {
    r: Math.max(0, Math.min(255, red)),
    g: Math.max(0, Math.min(255, green)),
    b: Math.max(0, Math.min(255, blue)),
  };
}

function LightScreen({ brightness, temperature }: LightScreenProps) {
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!screenRef.current) return;

    const brightnessDecimal = brightness / 100;
    const rgb = kelvinToRGB(temperature);

    const finalR = Math.round(rgb.r * brightnessDecimal);
    const finalG = Math.round(rgb.g * brightnessDecimal);
    const finalB = Math.round(rgb.b * brightnessDecimal);

    screenRef.current.style.backgroundColor = `rgb(${finalR}, ${finalG}, ${finalB})`;
  }, [brightness, temperature]);

  return <div ref={screenRef} className="light-screen" />;
}

export default LightScreen;
