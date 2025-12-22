import { Voiture } from "./Voiture.js";

let imgVoiture = document.getElementById("voiture");
let btnViolet = document.getElementById("violet");
let btnVert = document.getElementById("vert");
let btnBleu = document.getElementById("bleu");
let btnStation = document.getElementById("station");

let voiture1 = new Voiture("violet", 70, 'Essence', 50);
console.log("avant peinture : " + voiture1.getCouleur());

imgVoiture.setAttribute("src", "./images/" + voiture1.getCouleur() + ".png");

btnVert.addEventListener("click", () => {
    voiture1.repeindre("vert");
    imgVoiture.setAttribute("src", "./images/" + voiture1.getCouleur() + ".png");
    console.log("après peinture : " + voiture1.getCouleur());
})
btnBleu.addEventListener("click", () => {
    voiture1.repeindre("bleu");
    imgVoiture.setAttribute("src", "./images/" + voiture1.getCouleur() + ".png");
    console.log("après peinture : " + voiture1.getCouleur());
})
btnViolet.addEventListener("click", () => {
    voiture1.repeindre("violet");
    imgVoiture.setAttribute("src", "./images/" + voiture1.getCouleur() + ".png");
    console.log("après peinture : " + voiture1.getCouleur());
})

btnStation.addEventListener("click", () => {
    console.log(`5L d'essence ajouté`)
    voiture1.ajouterCarburant(5)
     })