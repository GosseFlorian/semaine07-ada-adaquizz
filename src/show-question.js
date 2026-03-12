import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { variable } from './variable';

export function showQuestion(){
    document.querySelector('#app').innerHTML = `
    <h2 id="question">${quiz.questions[variable.indexQuestion].question}</h2>
    <div id ="responseChoice">
    <button class="choice">${quiz.questions[variable.indexQuestion].options[0]}</button>
    <button class="choice">${quiz.questions[variable.indexQuestion].options[1]}</button>
    <button class="choice">${quiz.questions[variable.indexQuestion].options[2]}</button>
    <button class="choice">${quiz.questions[variable.indexQuestion].options[3]}</button>
    </div>
    `

    const choices = document.querySelectorAll('.choice')

    choices.forEach((element, index) => {
        element.addEventListener('click', () => {
            if(index === quiz.questions[variable.indexQuestion].correctIndex){
                variable.score ++
                document.querySelector('#app').innerHTML += `
                <p id="goodAnswer">C'est une bonne réponse !</p>
                `
                // console.log("Bonne réponse")
                // console.log(variable.score)
            } else {
                document.querySelector('#app').innerHTML += `
                <p id="badAnswer">Raté, la réponse était : ${quiz.questions[variable.indexQuestion].options[quiz.questions[variable.indexQuestion].correctIndex]}</p>
                `
                // console.log("mauvaise réponse")
            }
            if(variable.indexQuestion < quiz.questions.length -1){
                variable.indexQuestion ++
                // console.log(variable.indexQuestion)
                document.querySelector('#app').innerHTML += `
                <button class="nextQuestion">Continue</button>
                `
            } else {
                document.querySelector('#app').innerHTML += `
                <button class="seeScore">Score</button>
                `
            }
        })
    })

    // document.querySelector('#choice').addEventListener('click', async() =>{
    //     const { answer } = await import('./answer');
    //     answer()
    // })
}
