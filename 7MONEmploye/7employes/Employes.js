export class Employe { 
    constructor (nom, prenom, dateEmbauche, fonction, salaire, service, anciennete, agence) {
    this.nom = nom;
    this.prenom = prenom;
    this.dateEmbauche = dateEmbauche;
    this.fonction = fonction;
    this.salaire = salaire;
    this.service = service;
    this.anciennete = anciennete = 0;
    this.agence = agence;
}

calculAnciennete() {
    this.anciennete = new Date().getFullYear() - this.dateEmbauche;
    console.log(`${this.nom} cumule ${this.anciennete} années d'ancienneté`)
    return this.anciennete;
}

calculPrime() {
    let prime = (this.salaire*0.05) + (this.salaire*0.02)*this.anciennete
    const aujd = new Date()
    const mois = aujd.getMonth();
    const jour = aujd.getDate();
    if (mois === 10 && jour === 30) {
        console.log(`Ordre de transfert d'un montant de ${prime} transmis le ${aujd}.`)
    }
    return prime
}

totalCout() {
    let totalSalarial = this.calculPrime() + this.salaire;
    return totalSalarial;
}

setAgence(monAgence) {
    this.agence = monAgence;
}

setRestau() {
    if (this.agence.restaurant===true){
        console.log(`Pour ${this.nom} ${this.prenom} Restaurant présent`)
    }
    else if (this.agence.restaurant===false){
        console.log(`Pour ${this.nom} ${this.prenom} Perception ticket restaurants`)
    }
}

setCheques() {
    let an = 'an'
    if (this.anciennete>=1) {
        if (this.anciennete>1){
        an = 'ans'
        }
        console.log(`Ancienneté de ${this.nom} ${this.prenom} supérieure à 1 an (${this.anciennete} ${an}), chèques disponibles.`)
    }
    else if (this.anciennete<1) {
        console.log(`Casse toi le nouveau`)
    }
}

}

