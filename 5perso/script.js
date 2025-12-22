// const sePresenter = (a) => {
//     console.log("Bonjour je m'appelle " + a.prenom);
// }

let acteur = {
    "prenom" : "Alain",
    "nom" : "DELON",
    "age" : 87 ,
    sePresenter : function() {
        console.log("Bonjour je m'appelle " + this.prenom )
    }
}

acteur.sePresenter();

function Acteur(prenom, nom, age) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.sePresenter = () => {
        console.log("Bonjour je m'appelle " + this.prenom + " " + this.nom);
    }
}

let alain = new Acteur("Alain", "DELON", 87);
let gerard = new Acteur("Gérard", "DEPARDIEU", 74);


console.log(alain.prenom);

function Film(titre, annee, acteur){
    this.titre = titre;
    this.annee = annee;
    this.acteur = acteur;

}

let maigret = new Film("Maigret", 2002, gerard);

console.log(maigret);

class Acteur {
    constructor(prenom, nom, age) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }
    sePresenter() {
        console.log("Bonjour je m'appelle " + this.prenom + " " + this.nom)
    }
}

let jean = new Acteur("Jean", "DUJARDIN", 50)
jean.sePresenter()

class Animal {
    constructor(nbPattes, poids) {
        this.nbPattes = nbPattes;
        this.poids = poids;
    }
    presentation() {
        console.log("Un animal à "+ this.nbPattes +" pattes et qui pèse " + this.poids + " kgs");
    }
}

let vache = new Animal(4, 750);

vache.presentation();

class Oiseau extends Animal {
    constructor(nbPattes, poids, longueurAiles) {
        super(nbPattes, poids);
        this.longueurAiles = longueurAiles;
    }
    voler() {
        console.log("Avec un poids de " + this.poids + " kgs et une envergure d'ailes de "+ this.longueurAiles+ " mètres, cet oiseau vole très haut !" );
    }
}

let aigleRoyal = new Oiseau(2, 5, 2);
aigleRoyal.presentation();