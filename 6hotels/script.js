class Chambre {
    constructor (superficie, nbPersonnes, reservation) {
        this.superficie = superficie;
        this.nbPersonnes = nbPersonnes;
        this.reservation = reservation;
        console.log(arguments)
    }

    recap() {
        console.log(`Chambre d'une superficie de : ${this.superficie}m2. Capacité : ${this.nbPersonnes} personnes. Statut : ${this.reservation}`);
    }
}

let chambre1 = new Chambre(20, 2, "Libre") 
chambre1.recap();

 
const chambre = [1,2,44,38,19]

// for (i=0; i<10; i++) {
//     let chambre[i] = new Chambre(20, 2, "Libre")
// }