import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { indexQuestion, score, selectedAnswer } from './variable';

export function showQuestion(button){
    button.addEventListener('click',() =>{
        document.querySelector('#app').innerHTML = `
            <h2 id="question">${quiz.questions[indexQuestion].question}</h2>
            <div id ="responseChoice">
                <button class="choice">${quiz.questions[indexQuestion].options[0]}</button>
                <button class="choice">${quiz.questions[indexQuestion].options[1]}</button>
                <button class="choice">${quiz.questions[indexQuestion].options[2]}</button>
                <button class="choice">${quiz.questions[indexQuestion].options[3]}</button>
            </div>
        `
    })
}

// answer(document.querySelector('.choice'))