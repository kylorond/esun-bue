import Particles from "react-particles";
import { Typewriter } from "react-simple-typewriter";
import { loadFireworksPreset } from "tsparticles-preset-fireworks"
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [happyIndependenceDay, setHappyIndependaceDay] = useState(["Menjelang", "Peringatan", "Detik-detik", "Proklamasi", "Republik Indonesia"])

  const particleInitialization = async(engine) => {
    await loadFireworksPreset(engine)
  }

  function timeLeft() {
    const independanceDay = new Date("August 17, 2024 10:00:00").getTime()
    const now = new Date().getTime()
    const timeRemaining = independanceDay - now
    return timeRemaining
  }

  return (
    <>
      <Particles
        init={particleInitialization}
        options={{preset: "fireworks"}}
      />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <span className="text-red-600 text-4xl font-bold px-4 z-50">
          <Typewriter 
            words={happyIndependenceDay} 
            loop={false}
            cursorStyle={"_"}
            cursor
          />
        </span>
        <div className="z-50 text-white">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setHappyIndependaceDay([
            "Dirgahayu", "Republik Indonesia", "Ke-79 🇮🇩"
          ])}/>
        </div>
      </div>
    </>
  );
}

export default App;
