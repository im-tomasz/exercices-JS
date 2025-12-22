
// IDENTIFIANTS ET LEUR GALERIE ASSOCIEE

const picasso = document.getElementById("picasso")
let galerieP = document.getElementById("galerieP")

const caillebotte = document.getElementById("caillebotte")
let galerieC = document.getElementById("galerieC")

const vermeer = document.getElementById("vermeer")
let galerieV = document.getElementById("galerieV")

const kandinsky = document.getElementById("kandinsky")
let galerieK = document.getElementById("galerieK")

const monet = document.getElementById("monet")
let galerieM = document.getElementById("galerieM")

const vangogh = document.getElementById("vangogh")
let galerieVG = document.getElementById("galerieVG")

const test = () => {
    console.log("Bonjour")
}

test()
// FONCTION + ANIMATION

const maFonction = (a,b,c,d,e) => {
    a.style.display = "none"
    b.style.display = "none"
    c.style.display = "none"
    d.style.display = "none"
    e.style.display = "none"
}

const monAnim = (a) => {
    a.style.display = "block"
    a.classList.add("animate__animated", "animate__bounceIn")
}


// APPEL DE LA FONCTION POUR AFFICHAGE INITIAL

maFonction(galerieC, galerieV, galerieK, galerieM, galerieVG)
galerieP.style.display = "block"


// BOUTONS CLIQUABLES

picasso.addEventListener("click", () => {
    let transit = galerieP
     if (transit.style.display==="block") {
        console.log("Galerie déjà affichée")
        return;
    }
    console.log(transit)
    maFonction(galerieC, galerieV, galerieK, galerieM, galerieVG)
    monAnim(transit)
})

caillebotte.addEventListener("click", () => {
   let transit = galerieC
    if (transit.style.display==="block") {
        console.log("Galerie déjà affichée")
        return;
    }
    console.log(transit)
    maFonction(galerieP, galerieV, galerieK, galerieM, galerieVG)
    monAnim(transit)
})

vermeer.addEventListener("click", () => {
    let transit = galerieV
     if (transit.style.display==="block") {
        console.log("Galerie déjà affichée")
        return;
    }
    console.log(transit)
    maFonction(galerieC, galerieP, galerieK, galerieM, galerieVG)
    monAnim(transit)
})

kandinsky.addEventListener("click", () => {
    let transit = galerieK
     if (transit.style.display==="block") {
        console.log("Galerie déjà affichée")
        return;
    }
    console.log(transit)
    maFonction(galerieC, galerieV, galerieP, galerieM, galerieVG)
    monAnim(transit)
})

monet.addEventListener("click", () => {
    let transit = galerieM
     if (transit.style.display==="block") {
        console.log("Galerie déjà affichée")
        return;
    }
    console.log(transit)
    maFonction(galerieC, galerieV, galerieK, galerieP, galerieVG)
    monAnim(transit)
})

vangogh.addEventListener("click", () => {
    let transit = galerieVG
     if (transit.style.display==="block") {
        console.log("Galerie déjà affichée")
        return;
    }
    console.log(transit)
    maFonction(galerieC, galerieV, galerieK, galerieM, galerieP)
    monAnim(transit)
})