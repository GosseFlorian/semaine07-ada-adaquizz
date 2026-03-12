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
                console.log("Bonne réponse")
                variable.score ++
                console.log(variable.score)
            } else {
                console.log("mauvaise réponse")
            }
            //
        })
    })

    // document.querySelector('#choice').addEventListener('click', async() =>{
    //     const { answer } = await import('./answer');
    //     answer()
    // })
}
