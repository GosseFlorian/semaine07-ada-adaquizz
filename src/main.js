import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { startQuizz } from './start';
import { showQuestion } from './show-question';
import { nextQuestion } from './next-question';
import { endGame } from './end';

let score = 0

document.querySelector('#app').innerHTML = `
    <div id="acceuil">
        <h1>${quiz.title}</h1>
        <button id="start">Démarrer</button>
    </div>`
    
startQuizz(document.querySelector('#start'))

    // <div id="screenQuizz">
    //     <header>
    //         <h1>${quiz.title}</h1>
    //     </header>
    //     <div id="divQuizz>
    //         <h2 id="question"></h2>
    //         <div id ="responseChoice">
    //             <button id="choice1"></button>
    //             <button id="choice2"></button>
    //             <button id="choice3"></button>
    //             <button id="choice4"></button>
    //         </div>
    //         <p id="responseMessage"></p>
    //         <button id="continue">Continue</button>
    //     </div>
    // </div>
    // <div id="endScreen">
    //     <h2 id="scoreMessage"></h2>
    //     <h3 id="poucentageResponseMessage"></h3>
    //     <p id="score"></p>
    //     <button id="replayQuizz"></button>
    // </div>