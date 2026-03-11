export function startQuizz(button){
    button.addEventListener('click',() =>{
        acceuil = document.querySelector('#acceuil')
        screenQuizz = document.querySelector('#screenQuizz')
        acceuil.style.display = "none"
        screenQuizz.style.display = "block"
    })
}
