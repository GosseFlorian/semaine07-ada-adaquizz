import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { showQuestion } from './show-question';

document.querySelector('#app').innerHTML = `
        <h1>${quiz.title}</h1>
        <button id="start">Démarrer</button>
    `
document.querySelector('#start').addEventListener('click',showQuestion)