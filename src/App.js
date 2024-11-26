import { useState } from 'react';
import './App.css';
import { MainPage } from './Components/MainPage';
import { QuizPage } from './Components/QuizPage';
import { ResultPage } from './Components/ResultPage';
import {QuizContext} from './Helpers/QuizContext';

function App() {
  const [gameState, setgameState] = useState("menu");
  const [Score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setgameState, Score, setScore}}>
      {gameState === "menu" && <MainPage/>}
      {gameState ==="quiz" && <QuizPage/>}
      {gameState ==="result" && <ResultPage/>}
      </QuizContext.Provider>
    </div>
   
  );
}

export default App;
