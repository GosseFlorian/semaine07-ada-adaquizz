import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { showQuestion } from './show-question';

document.querySelector('#app').innerHTML = `
    <div id="acceuil">
        <h1>${quiz.title}</h1>
        <button id="start">Démarrer</button>
    </div>
    `
document.querySelector('#start').addEventListener('click',showQuestion)