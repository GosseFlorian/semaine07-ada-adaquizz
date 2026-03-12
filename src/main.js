import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { showQuestion } from './show-question';

let score = 0
let indexQuestion = 0
let selectedAnswer = ""

document.querySelector('#app').innerHTML = `
    <div id="acceuil">
        <h1>${quiz.title}</h1>
        <button id="start">Démarrer</button>
    </div>`
    
showQuestion(document.querySelector('#start'))