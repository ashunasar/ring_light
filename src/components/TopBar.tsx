import { useEffect, useState } from "react";
import "./TopBar.css";

interface TopBarProps {
  controlsVisible: boolean;
  onToggleControls: () => void;
}

function TopBar({ controlsVisible, onToggleControls }: TopBarProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "h" || e.key === "H") {
        onToggleControls();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onToggleControls]);

  return (
    <div className="top-bar">
      <button
        className="top-icon-btn"
        onClick={toggleFullscreen}
        title="Toggle fullscreen (F)"
      >
        <span className="icon">{isFullscreen ? "🞬" : "⛶"}</span>
        <span className="label">
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </span>
      </button>
      <button
        className="top-icon-btn"
        onClick={onToggleControls}
        title="Hide controls (H)"
      >
        <span className="icon">🎛️</span>
        <span className="label">
          {controlsVisible ? "Hide Controls" : "Show Controls"}
        </span>
      </button>
    </div>
  );
}

export default TopBar;
