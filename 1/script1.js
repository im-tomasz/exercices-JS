const input1El = document.getElementById("number1")
const input2El = document.getElementById("number2")
const titre = document.querySelector("h1")
const body = document.querySelector('body')


const buttonEl = document.getElementById("add")


buttonEl.addEventListener("click", ()=> {  
    const value1 = parseInt(input1El.value);
    const value2 = parseInt(input2El.value); 
    if (isNaN(value1) || isNaN(value2)) {
        titre.textContent = "Incorrect";
        return;
    }
    let result = document.createElement("p");
    result.textContent = "ce paragraphe a été ajouté en JavaScript"
    body.appendChild(result)
    titre.textContent = value1+value2

    console.log({value1, value2})
    console.log(input1El, input2El)
})
