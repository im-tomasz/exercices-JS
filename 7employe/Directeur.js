export class Directeur {
    constructor (nom, prenom, dateEmbauche, salaire, anciennete, enfants) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateEmbauche = dateEmbauche;
        this.salaire = salaire;
        this.anciennete = anciennete;
        this.enfants = enfants;
    }


        calculAnciennete() {
        let date = new Date().getFullYear();
        this.anciennete = date - this.dateEmbauche;
        console.log(this.anciennete)
    }

        calculPrimesVirements() {
        this.prime = (this.salaire*0.07) + (this.salaire*0.03)*(this.anciennete);
        let date = new Date();
        let annee = date.getFullYear()
        let mois = date.getMonth();
        let jour = date.getDate();
        if (mois === 11 && jour === 30) {
            console.log(`Pour ${this.nom}, un virement d'un montant de ${this.prime}€ a été demandé le "${date}"`)
        }
        else {
            console.log(`Pour ${this.nom}, un montant de ${this.prime}€ sera versé le 30/11/${annee}`)
        }
        return this.prime;
    }
    
}