import { useState } from "react";
import ColorBox from "./component/ColorBox";
import ColorOption from "./component/ColorOption";
import Score from "./component/Score";
import GameInstructions from "./component/GameIntruction";

const colors = ["#00CFFF", "#A7FF4A", "#E15827", "#74E0B3", "#825100", "#6C44E6"];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function App() {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [colorOptions, setColorOptions] = useState(shuffleArray(colors));
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore((prevScore) => prevScore + 1);
      setGameStatus("Correct!");
      setTimeout(() => {
        setTargetColor(getRandomColor());
        setColorOptions(shuffleArray(colors));
        setGameStatus("");
      }, 1000);
    } else {
      setGameStatus("Wrong! Try Again.");
    }
  };

  const resetGame = () => {
    setTargetColor(getRandomColor());
    setColorOptions(shuffleArray(colors));
    setScore(0);
    setGameStatus("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-[20px] bg-[#02021b] font-serif">
      <div className="border-2 shadow-[10px_10px_10px_rgba(38,34,71,0.9)] bg-[#010113] flex justify-center items-center min-h-screen flex-col w-[680px] rounded-[20px] py[40px]">
        <h1 className="text-3xl font-bold mb-4 text-amber-50">COLOR GUESS GAME</h1>
        <GameInstructions />
        <ColorBox targetColor={targetColor} />
        <div className="flex gap-4 mt-6 flex-wrap">
          {colorOptions.map((color, index) => (
            <ColorOption key={index} color={color} onClick={handleGuess} />
          ))}
        </div>
        <Score score={score} />
        <p className="text-lg my-6 font-bold text-amber-50">
          {gameStatus}{" "}
          {gameStatus === "Correct!" ? "🎉" : gameStatus === "Wrong! Try Again." ? "😢" : ""}
        </p>
        <button
          className="px-8 py-4 bg-green-500 rounded-lg animate-bounce transition-transform transform hover:scale-110 hover:bg-green-700"
          data-testid="newGameButton"
          onClick={resetGame}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
