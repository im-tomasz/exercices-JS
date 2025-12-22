import {Employe} from "./Employe.js"
import {Agence} from "./Agence.js"
import {Enfant} from "./Enfants.js"




let agence1 = new Agence ("DelcoPARIS", "14 BOULEVARD CLEMENCEAU", 75012, "Paris", true)
let agence2 = new Agence ("DelcoAmiens", "6 PLACE ALGHERO", 80080, "Amiens", false)

let enfant1 = new Enfant ("Diego", 12)
let enfant2 = new Enfant ("Emilien", 8)
let enfant3 = new Enfant ("Chloé", 17)
let enfant4 = new Enfant ("Lou", 14)

const enfantsPEUPLU = [enfant1, enfant3]
const enfantsJAVELLE = [enfant2, enfant4]

let bart = new Employe ("ABBAT", "Bart", 2025, "Comptable", 20000, "Gestion", 0, agence1)
let gerard = new Employe ("MANSOIFFE", "Gerard", 2019, "Designer", 19000, "Open Space", 0, agence1)
let jean = new Employe ("PEUPLU", "Jean", 2018, "Lead Designer", 24000, "Open Space", 0, agence2, enfantsPEUPLU)
let aude = new Employe ("JAVELLE", "Aude", 2015, "Motion Designer", 20000, "Open Space", 0, agence2, enfantsJAVELLE)
let eva = new Employe ("LAVEYTONQ", "Eva", 2024, "RH", 19500, "Gestion", 0, agence2)

const employes = [bart, gerard, jean, aude, eva]


//2. OBTENIR LES ANCIENNETES
employes.forEach(employe => employe.calculAnciennete());


//3. OBTENIR LES PRIMES
employes.forEach(employe => employe.calculPrimesVirements());


//4.B TRI ALPHABETIQUE
let sortedEmployeNomPrenom = employes.toSorted((a, b) => {
  if (a.nom < b.nom) {
     return -1;
    }
  else if (a.nom > b.nom ) {
     return 1;
    }
  return 0;
});
console.log(sortedEmployeNomPrenom)

//4.C TRI ALPHABETIQUE SERVICE
let sortedEmployeService = employes.toSorted((a, b) => {
    if (a.service < b.service) {
        return -1;
    }
    else if (a.service > b.service){
        return 1;
    }

    if (a.service === b.service){
        if (a.nom < b.nom){
            return -1;
        }
        if (a.nom > b.nom ){
            return 1;
        }
        }
});
console.log(sortedEmployeService)

//4.D CALCUL COUT SALARIAL
let coutTotal = 0

function calculMasse {
    employes.forEach((employe) => coutTotal += employe.calculMasseSalariale()
}
console.log(`La masse salariale sera d'un montant de ${(coutTotal)} €`)

let coutTotalReduce = employes.reduce((accumulator, employe) => {
    return accumulator + employe.calculMasseSalariale()
}, 0)
console.log(`La masse salariale (calcul avec la méthode "reduce") sera d'un montant de ${(coutTotalReduce)} €`)


//6. RESTAURATION
employes.forEach((employe) => employe.restauration() )

//7. CHEQUES VACANCES
employes.forEach((employe) => employe.chequesVacances())


console.log(enfantsJAVELLE)

aude.chequesEnfants()




// jean.enfant.forEach(() => {
//     console.log(this.age)
// })