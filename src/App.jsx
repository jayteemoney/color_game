import { useState } from "react";
import ColorBox from "./component/ColorBox";
import ColorOption from "./component/ColorOption";
import Score from "./component/Score";
import GameInstructions from "./component/GameIntruction";

const colors = ["#00CFFF", "#A7FF4A", "#E15827", "#74E0B3", "#825100", "#6C44E6"];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

function App() {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [colorOptions, setColorOptions] = useState(shuffle([...colors]));
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setGameStatus("Correct!");
      setTimeout(resetGame, 1000);
    } else {
      setGameStatus("Wrong! Try Again.");
    }
  };

  const resetGame = () => {
    setTargetColor(getRandomColor());
    setColorOptions(shuffle([...colors]));
    setGameStatus("");
  };
  {colorOptions.map((color, index) => (
    <ColorOption
      key={index}
      color={color}
      onClick={handleGuess}
    />
  ))}
  

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Guess the Color</h1>
      <GameInstructions />
      <ColorBox targetColor={targetColor} />
      <div className="flex gap-4 mt-6">
        {colorOptions.map((color, index) => (
          <ColorOption key={index} color={color} onClick={handleGuess} />
        ))}
      </div>
      <Score score={score} />
      <p className="text-lg font-semibold my-4">{gameStatus}</p>
      <button
        className="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-700 transition-all"
        onClick={resetGame}
      >
        New Game
      </button>
    </div>
  );
}

export default App;