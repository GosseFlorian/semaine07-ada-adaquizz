import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { startQuizz } from './start';

document.querySelector('#app').innerHTML = `
    <div id="acceuil">
        <h1>${quiz.title}</h1>
        <button id="start">Démarrer</button>
    </div>
    <div id="divQuizz">
        <header>
            <h1>${quiz.title}</h1>
        </header>
        <div id="screenQuizz>
            <h2 id="question"></h2>
            <div id ="responseChoice">
                <button id="choice1"></button>
                <button id="choice2"></button>
                <button id="choice3"></button>
                <button id="choice4"></button>
            </div>
            <div id="responseMessage">
                <p id="message"></p>
            </div>
            <button id="continue">Continue</button>
        </div>
        


`

startQuizz(document.querySelector('#start'), document.querySelector('#acceuil'))