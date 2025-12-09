import { useState, useEffect } from "react";
import "./App.css";
import LightScreen from "./components/LightScreen";
import TopBar from "./components/TopBar";
import Controls from "./components/Controls";

function App() {
  // Initialize state directly from localStorage
  const [brightness, setBrightness] = useState(() => {
    const saved = localStorage.getItem("brightness");
    return saved ? Number(saved) : 100;
  });

  const [temperature, setTemperature] = useState(() => {
    const saved = localStorage.getItem("temperature");
    return saved ? Number(saved) : 5500;
  });

  const [controlsVisible, setControlsVisible] = useState(true);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("brightness", brightness.toString());
  }, [brightness]);

  useEffect(() => {
    localStorage.setItem("temperature", temperature.toString());
  }, [temperature]);

  // Keyboard shortcuts for brightness and temperature
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setBrightness((prev) => Math.min(100, prev + 5));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setBrightness((prev) => Math.max(0, prev - 5));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setTemperature((prev) => Math.min(6500, prev + 100));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setTemperature((prev) => Math.max(2700, prev - 100));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleControls = () => {
    setControlsVisible(!controlsVisible);
  };

  return (
    <div className="app">
      <LightScreen brightness={brightness} temperature={temperature} />
      <TopBar
        controlsVisible={controlsVisible}
        onToggleControls={toggleControls}
      />
      {controlsVisible && (
        <Controls
          brightness={brightness}
          temperature={temperature}
          onBrightnessChange={setBrightness}
          onTemperatureChange={setTemperature}
        />
      )}
    </div>
  );
}

export default App;
