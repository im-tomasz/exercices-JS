export class Voiture { // export permet à la classe d'être exportée et importer dans un autre fichier (exemple.js)
    // Attributs d'instance (privés grâce au signe #)
    #couleur;
    #capaciteReservoir;
    #quantiteCarburant;
    #motorisation;
    // Constructeur qui peut récupérer les valeurs et les stocker dans les attributs d'instance (nous verrons par la suite qu'il vaut mieux passer par les setters)
    constructor(couleur, capaciteReservoir, motorisation, quantiteCarburant) {
        console.log(arguments)
        this.setCouleur(couleur);
        this.setCapaciteReservoir(capaciteReservoir);
        this.setQuantiteCarburant(quantiteCarburant);
        this.setMotorisation(motorisation);
    }
    setCouleur(couleur) {
        this.#couleur = couleur;
    }
    setCapaciteReservoir(capaciteReservoir) {
        this.#capaciteReservoir = capaciteReservoir;
    }
    setQuantiteCarburant(quantiteCarburant) {
        // if (this.#capaciteReservoir <= this.#quantiteCarburant) {
            this.#quantiteCarburant = quantiteCarburant;
        // } else {
            // console.log("marche pluuuuuus")
        }
    // }
    setMotorisation(motorisation) {
        this.#motorisation = motorisation;
    }
    getCouleur() {
        return this.#couleur;
    }
    getCapaciteReservoir() {
        return this.#capaciteReservoir;
    }
    getQuantiteCarburant() {
        return this.#quantiteCarburant;
    }
    getMotorisation() {
        return this.#motorisation;
    }
    repeindre(couleur) {
        this.setCouleur(couleur);
    }

    ajouterCarburant(quantite) {
        if (quantite <= this.#capaciteReservoir - this.#quantiteCarburant) {
            this.#quantiteCarburant += quantite;
            console.log(`Le réservoir contient à présent ${this.#quantiteCarburant}L sur ${this.#capaciteReservoir}L`)
        } else if (quantite > this.#capaciteReservoir - this.#quantiteCarburant) {
                let restant = quantite + this.#quantiteCarburant - this.#capaciteReservoir;
                this.#quantiteCarburant = this.#capaciteReservoir;
                console.log(`Les ${this.#capaciteReservoir}L du réservoir ont été dépassés lors du plein, ${restant}L de carburant vous tombent sur les pieds`)
            }
        
    }
    afficherCaracteristiques() {
        return `La voiture est ${this.#couleur}, c'est une ${this.#motorisation}`;
    }
}