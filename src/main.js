import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { startQuizz } from './start';

document.querySelector('#app').innerHTML = `
  <div id="acceuil">
  <h1>${quiz.title}</h1>
  <button id="start">Démarrer</button>
  </div>
`

startQuizz(document.querySelector('#start'), document.querySelector('#acceuil'))