import { useState, useEffect } from "react";
import "./App.css";
import LightScreen from "./components/LightScreen";
import TopBar from "./components/TopBar";
import Controls from "./components/Controls";

function App() {
  const [brightness, setBrightness] = useState(100);
  const [temperature, setTemperature] = useState(5500);
  const [controlsVisible, setControlsVisible] = useState(true);

  // Load saved settings from localStorage
  useEffect(() => {
    const savedBrightness = localStorage.getItem("brightness");
    const savedTemp = localStorage.getItem("temperature");

    if (savedBrightness) setBrightness(Number(savedBrightness));
    if (savedTemp) setTemperature(Number(savedTemp));
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("brightness", brightness.toString());
    localStorage.setItem("temperature", temperature.toString());
  }, [brightness, temperature]);

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
