import { useState } from "react";
import "./Controls.css";

interface ControlsProps {
  brightness: number;
  temperature: number;
  onBrightnessChange: (value: number) => void;
  onTemperatureChange: (value: number) => void;
}

interface Preset {
  name: string;
  temp: number;
  bright: number;
  className: string;
}

const presets: Preset[] = [
  { name: "Warm", temp: 3200, bright: 100, className: "warm" },
  { name: "Neutral", temp: 5500, bright: 100, className: "neutral" },
  { name: "Cool", temp: 6500, bright: 100, className: "cool" },
  { name: "Soft", temp: 4500, bright: 70, className: "soft" },
  { name: "Sunset", temp: 3000, bright: 80, className: "sunset" },
  { name: "Night Mode", temp: 3200, bright: 35, className: "night" },
  { name: "Green Screen", temp: 5000, bright: 90, className: "green" },
  { name: "Daylight", temp: 5600, bright: 80, className: "daylight" },
];

function Controls({
  brightness,
  temperature,
  onBrightnessChange,
  onTemperatureChange,
}: ControlsProps) {
  const [activePreset, setActivePreset] = useState<number | null>(null);

  const handlePresetClick = (preset: Preset, index: number) => {
    onTemperatureChange(preset.temp);
    onBrightnessChange(preset.bright);
    setActivePreset(index);
  };

  const handleBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onBrightnessChange(Number(e.target.value));
    setActivePreset(null);
  };

  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTemperatureChange(Number(e.target.value));
    setActivePreset(null);
  };

  return (
    <div className="controls">
      <div className="control-group">
        <label>
          <span>Brightness</span>
          <span className="value-display">{brightness}%</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={handleBrightnessChange}
        />
      </div>

      <div className="control-group">
        <label>
          <span>Temperature</span>
          <span className="value-display">{temperature}K</span>
        </label>
        <input
          type="range"
          min="2700"
          max="6500"
          value={temperature}
          onChange={handleTemperatureChange}
        />
      </div>

      <div className="control-group">
        <span className="preset-section-title">Presets</span>
        <div className="preset-buttons">
          {presets.map((preset, index) => (
            <button
              key={index}
              className={`preset-btn ${preset.className} ${
                activePreset === index ? "active" : ""
              }`}
              onClick={() => handlePresetClick(preset, index)}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="info">
        Tip: Use ⬆⬇ for brightness, ⬅➡ for temperature, H to hide controls.
      </div>
    </div>
  );
}

export default Controls;
