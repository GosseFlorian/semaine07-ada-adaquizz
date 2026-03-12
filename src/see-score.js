import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { variable } from './variable';

export function seeScore(){
    console.log("on a fini")
    console.log(`résultat: ${variable.score}/${quiz.questions.length}`)
}