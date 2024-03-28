
const symbols = '!@#$%&*?^'.split("")
const numbers = '0123456789'.split("")
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

const elementsOfPassword = [symbols,numbers,letters]

const quantitySymbols = document.querySelector("#quantitySymbols")
const quantityNumbers = document.querySelector("#quantityNumbers")
const quantityLetters = document.querySelector("#quantityLetters")
const generatePassword = document.querySelector("#generatePassword")

const containerResult = document.querySelector("#finallyPassword")
const finallyResult = document.querySelector("#result")
const viewLastPassword = document.querySelector("#viewMyLastPassword")



generatePassword.addEventListener("click", () => {
    
  
    let assistant 
    let quantitiyPerTypeOfElement = [Number(quantitySymbols.value),Number(quantityNumbers.value),Number(quantityLetters.value)]
    let finallyElementsPassWord = []
    for(let c = 0; c < 3; c++){
        finallyElementsPassWord.push(...takeElement(elementsOfPassword[c],quantitiyPerTypeOfElement[c]))
    }
     
    for(let c = 0; c < finallyElementsPassWord.length; c++){
        let randomNumber1 = Math.floor(Math.random()*finallyElementsPassWord.length)
        let randomNumber2 = Math.floor(Math.random()*finallyElementsPassWord.length)

        assistant = finallyElementsPassWord[randomNumber1]
        finallyElementsPassWord[randomNumber1] = finallyElementsPassWord[randomNumber2]
        finallyElementsPassWord[randomNumber2] = assistant
    }

    localStorage.setItem("senha",finallyElementsPassWord.join(""))
    containerResult.style.visibility = "visible"
    containerResult.textContent = `ESTA É SUA SENHA: ${finallyElementsPassWord.join("")}`
})


viewLastPassword.addEventListener("click",() => {
    containerResult.style.visibility = "visible"
    containerResult.textContent = `A SUA ÚLTIMA SENHA FOI: ${localStorage.getItem("senha")}`
})

const takeElement = (typeOfElement,quantityElement) => {
    let elementsHolder = []
    for(let c = 0; c < quantityElement; c++){
        let randomNumber = Math.floor(Math.random()*typeOfElement.length)
        elementsHolder.push(typeOfElement[randomNumber])
    }
    return elementsHolder
}

