import {Employe} from "./Employes.js";
import {Agence} from "./Agence.js";


// AGENCES
let agenceParis = new Agence ("DelcoParis", "2 Rue de la Biche", 71012, "Paris", true)
let agenceAmiens = new Agence ("DelcoAmiens", "14 Boulevard Pinède", 62080, "Amiens", false)


// EMPLOYES
let MonsieurBulle = new Employe ("Bulle", "Timobulle", 2019, "comptable", 23000, 0, "comptabilité", agenceParis);
let MadameBulle = new Employe ("Bulle" , "bMelinbulle", 2017, "Manoeuvre", 30000, 0, "Arrimage", agenceParis);
let filsdeBulle = new Employe ("Bulle", "aSachabulle", 2024, "Manoeuvre", 18000, 0, "Arrimage", agenceParis);
let préanBulle =  new Employe ("Preanbulle", "cPenãbulle", 2020, "Cadre", 25000, 0, "Arrimage", agenceAmiens);
let cousinBulle = new Employe ("CousinBulle", "Mike", 2021, "Manager", 15, 0, "Abrrimage", agenceAmiens)

const employes = [MonsieurBulle, MadameBulle, filsdeBulle, préanBulle, cousinBulle]

// FONCTION AFFICHAGE INDIVIDUEL DES PRIMES
const affichagePrimes = (employes) => {
    const primes = employes.map(employes => employes.salaire);
    console.log(primes)
} 
affichagePrimes(employes)


// FONCTION TRI ORDRE ALPHABETIQUE
let sortedEmployesNomPrenom = employes.toSorted((a,b) => {
    
    if (a.nom  < b.nom) {
    return -1;
  } 
    else if (a.nom > b.nom) {
    return 1;
  }
    if (a.nom === b.nom) {
      if (a.prenom < b.prenom) {
        return -1; 
      }
      else if (a.prenom > b.prenom) {
      return 1;
      }
  }
})
console.log(sortedEmployesNomPrenom)

// FONCTION TRI SERVICE ORDRE ALPHAB.
let sortedEmployesService = employes.toSorted((a,b) => {

  if (a.service < b.service) {
    return -1;
  }
  else if (a.service > b.service) {
    return 1;
  }
  
  if (a.service === b.service) {
    if (a.nom  < b.nom) {
      return -1;
    } 
    else if (a.nom > b.nom) {
      return 1;
    }
      if (a.nom === b.nom) {
        if (a.prenom < b.prenom) {
          return -1; 
        }
        else if (a.prenom > b.prenom) {
        return 1;
        }
    }
  }
})

// CALCUL ANCIENNETE PAR EMPLOYE
employes.forEach((employe) => {
  employe.calculAnciennete()
})

// CALCUL COUT SALARIAL TOTAL
let coutTotal = 0
employes.forEach((employe) => {
 coutTotal += employe.totalCout()
})
console.log(`Coût total des salaires et primes : ${coutTotal} €`)

// VARIANTE COUT SALARIAL TOTAL (BOUCLE)
let deuxiemeCout = 0
let i
for (i=0; i<employes.length; i++) {
  deuxiemeCout += employes[i].totalCout()
}
console.log (`DEUXIEME Coût total des salaires et primes : ${deuxiemeCout} €`)

// MonsieurBulle.setAgence(agenceParis)

console.log(MonsieurBulle)
console.log(agenceParis)


// RESTAURANT ABSENT OU PRESENT
employes.forEach((employe) => {
 employe.setRestau()
})


// DROIT AUX CHEQUES
employes.forEach((employe) => {
  employe.setCheques()
})

