import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { indexQuestion, score, selectedAnswer } from './variable';

export function showQuestion(){
    document.querySelector('#app').innerHTML = `
    <h2 id="question">${quiz.questions[indexQuestion].question}</h2>
    <div id ="responseChoice">
    <button id="choice">${quiz.questions[indexQuestion].options[0]}</button>
    <button class="choice">${quiz.questions[indexQuestion].options[1]}</button>
    <button class="choice">${quiz.questions[indexQuestion].options[2]}</button>
    <button class="choice">${quiz.questions[indexQuestion].options[3]}</button>
    </div>
    `
    document.querySelector('#choice').addEventListener('click', async() =>{
        const { answer } = await import('./answer');
        answer()
    })
}
