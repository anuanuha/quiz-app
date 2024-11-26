import { useContext, useState } from "react"
import { Question } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/QuizContext";
import '../App.css';

export const QuizPage=()=>{
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const {Score,setScore,setgameState} = useContext(QuizContext);
    const nextQuestion=()=>{
        if(Question[currentQuestion].Answer == optionChosen){
            setScore(Score+1);
        }
        setCurrentQuestion(currentQuestion+1);
    }
    const finishQuestion=()=>{
        if(Question[currentQuestion].Answer == optionChosen){
            setScore(Score+1);
        }
        setgameState("result")
    }
    return(
        <div className="Quiz">
             <h1 className="Question">{Question[currentQuestion].prompt}</h1> 
            <div className="Option">
        
         <button onClick={()=>{setOptionChosen("optionA")}} >{Question[currentQuestion].optionA}</button>
         <button onClick={()=>{setOptionChosen("optionB")}} >{Question[currentQuestion].optionB}</button> 
         <button onClick={()=>{setOptionChosen("optionC")}} >{Question[currentQuestion].optionC}</button>
         <button onClick={()=>{setOptionChosen("optionD")}} >{Question[currentQuestion].optionD}</button> 
         
         </div>
    
         {
            currentQuestion==Question.length-1?(
                <button onClick={finishQuestion}>Finish Quiz</button>
            ): <button onClick={nextQuestion}>NextQuestion</button>
         }
         
 
        </div>
    )
}