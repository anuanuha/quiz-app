import { useContext } from "react"
import { QuizContext } from "../Helpers/QuizContext"

export const MainPage=()=>{
    const {gameState, setgameState} = useContext(QuizContext)
    return(
        <div className="Menu">
          <button
          onClick={()=>{setgameState("quiz")}}
          >Start Quiz</button>
        </div>
    )
}