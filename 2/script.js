const body = document.querySelector('body');

let container = document.createElement('section');
body.appendChild(container);
container.style.width = 500 + 'px'
container.style.height = 1000 + 'px'
container.style.background = 'grey'


let divBoutons = document.createElement('div');
container.appendChild(divBoutons);

let button1 = document.createElement('button');
divBoutons.appendChild(button1);
button1.textContent = "GROW"
button1.id = "grow";
button1.style.width = "80px";
button1.style.height = "20px";
button1.style.marginRight = "5px"

let button2 = document.createElement('button');
divBoutons.appendChild(button2);
button2.textContent = "GREEN"
button2.id = "green";
button2.style.width = "80px";
button2.style.height = "20px";
button2.style.margin = "5px"

let button3 = document.createElement('button');
divBoutons.appendChild(button3);
button3.textContent = "DISPARAIT"
button3.id = "disparait";
button3.style.width = "80px";
button3.style.height = "20px";
button3.style.margin = "5px"

let button4 = document.createElement('button');
divBoutons.appendChild(button4);
button4.textContent = "REAPPARAIT"
button4.id = "reapparait";
button4.style.width = "80px";
button4.style.height = "20px";
button4.style.margin = "5px"

let button5 = document.createElement('button');
divBoutons.appendChild(button5);
button5.textContent = "RESET"
button5.id = "reset";
button5.style.width = "80px";
button5.style.height = "20px";
button5.style.margin = "5px"






// carré bleu
let carré = document.createElement ("div");
carré.id = "moncarré";
carré.style.backgroundColor = "blue";
carré.style.height = "200px";
carré.style.width = "200px";
carré.style.marginLeft = "130px"
carré.style.marginTop = '100px'
carré.style.position = "absolute"
container.appendChild(carré);



button1.addEventListener("click", () => {
    carré.style.width = parseInt(carré.style.width) + 10 + "px";
    carré.style.height = parseInt(carré.style.height) + 10 + "px";

    if ((carré.style.height)=== "300px") {
        carré.style.height = 200+ "px";
        carré.style.width = 200 + "px";
    }

     console.log(carré.style.width);
} )

let couleur = false;

button2.addEventListener("click", () => {
    couleur = !couleur
    console.log(couleur)
    if (couleur) {
    carré.style.backgroundColor = "green";
    }
    else {
        carré.style.backgroundColor = "blue";
    }
    
})


button3.addEventListener("click", () => {
    carré.style.display = "none";

})

button4.addEventListener("click", () => {
    carré.style.display = "block";

})

button5.addEventListener("click", () => {
    carré.style.backgroundColor = "blue";
    carré.style.height = "200px";
    carré.style.width = "200px";
    carré.style.display = "block"
})







let  pas= 0;
const foulée = 10;

let controlswitch = true;

document.addEventListener('keyup', (e)=> {
    if (e.key==="a") {
        controlswitch = !controlswitch
        console.log(e.key + controlswitch)
        return;
    }

    if (e.key==="ArrowLeft" && controlswitch===false) {
        console.log(e.key + "essai");
        if (parseInt(carré.style.marginLeft) > 0) {
        carré.style.marginLeft = parseInt(carré.style.marginLeft) -10 + 'px';
        console.log(e.key +' Nouvelle marge '+ carré.style.marginLeft);
        }
    }
    else if (e.key==="ArrowRight" && controlswitch===false) {
        if (parseInt(carré.style.marginLeft) < window.innerWidth) {
        carré.style.marginLeft = parseInt(carré.style.marginLeft) +10 + 'px';
       console.log("nouvelle marge " + carré.style.marginLeft);}
    }
    else if (e.key==="ArrowRight" && controlswitch===true) {
        console.log(e.key + " essai " + (carré.style.transform));
        pas += foulée
       carré.style.transform = `translateX(${pas}px)`
        }
    else if (e.key==="ArrowLeft" && controlswitch===true) {
        console.log(e.key + " essai " + (carré.style.transform) )
        pas -= foulée
        carré.style.transform = `translateX(${pas}px)`
    }
})










document.addEventListener('keyup', (e)=> {
  
})

carré.style.transition = "transform 0.3s"