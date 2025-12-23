export class Employe {
    constructor (nom, prenom, dateEmbauche, fonction, salaire, service, anciennete, agence, enfants) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateEmbauche = dateEmbauche;
        this.fonction = fonction;
        this.salaire = salaire;
        this.service = service;
        this.anciennete = anciennete;
        this.agence = agence;
        this.enfants = enfants
    }

    //2. OBTENIR LES ANCIENNETES
    calculAnciennete() {
        let date = new Date().getFullYear();
        this.anciennete = date - this.dateEmbauche;
    }

    //3. OBTENIR LES PRIMES
    calculPrimesVirements() {
        this.prime = (this.salaire*0.05) + (this.salaire*0.02)*(this.anciennete);
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


    //4.D CALCUL COUT SALARIAL
    calculPrime() {
        this.prime = (this.salaire*0.05) + (this.salaire*0.02)*(this.anciennete);
        return this.prime;
    }

    //4.D.a CALCUL COUT SALARIAL
    calculMasseSalariale() {
        let masseSalariale = this.calculPrime() + this.salaire;
        return masseSalariale;
    }

    //6. RESTAURATION
    restauration() {
        if (this.agence.restaurant===true)
            console.log(`L'agence ${this.agence.nom} de l'employé ${this.nom} ${this.prenom} possède un restaurant`)
        else if (this.agence.restaurant===false)
            console.log(`L'agence ${this.agence.nom} de l'employé ${this.nom} ${this.prenom} ne possède pas de restaurant`)
    }

    //7. CHEQUES VACANCES
    chequesVacances() {
        let an = "an"
        if (this.anciennete>=1){
            if (this.anciennete>1){
                an = "ans"
            }
            console.log(`L'employé ${this.nom} ${this.prenom} cumule ${this.anciennete} ${an} d'ancienneté. Perception de chèques vacances.`)
        }
        else {
            console.log(`${this.nom} ${this.prenom} casse toi clochard`)
        }
    }


    chequesEnfants() {
        let cheque50 = 0;
        let cheque30 = 0;
        let cheque20 = 0;
        for (i=0; i<this.enfant.length; i++) {
            if (this.enfant[i].age>18){
                console.log(`${this.enfant[i].prenom} âge supérieur à 18. Pas de chèque.`);
            }
            else if (this.enfant[i].age>=16) {
                console.log(`${this.enfant[i].prenom} âge entre 16 et 18 ans. + 1 Chèque de 50 €.`);
                cheque50++;
            }
            else if (this.enfant[i].age>=11) {
                console.log(`${this.enfant[i].prenom} âge entre 11 et 15 ans. + 1 Chèque de 30 €.`);
                cheque30++;
            }
            else {
                console.log(`${this.enfant[i].prenom} âge inférieur à 10 ans. + 1 chèque de 20 €.`);
                cheque20++;
            }
            console.log(`${cheque50} chèques de 50 € / ${cheque30} cheque de 30 € /`)
        }

        let enfants= this.enfant.length

        console.log(this.enfant[0].age, this.enfant[1].age)
        console.log(enfants)
    }
}