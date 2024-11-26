import { useContext } from "react";
import { QuizContext } from "../Helpers/QuizContext";
import { Question } from "../Helpers/QuestionBank";
import '../App.css';
export const ResultPage=()=>{
    const{Score,setScore,setgameState}=useContext(QuizContext)
    const restartQuiz=()=>{
        setScore(0);
        setgameState("menu");
    }
    return(
        <div className="Result">
           <h1>Your score</h1>
           <h3>
           {Score}/{Question.length}
           </h3>
           <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}