
// Importing required modules
const { Database } = require('./database');

class Prestation {
    constructor() {
        this.database = new Database();
        this.database.connect();
    }

    loadPrestations() {
        this.database.getPrestations().then((prestations) => {
            // Code to display prestations in the UI
        }).catch((err) => {
            console.error(err);
        });
    }

    calculateAmount(clientId, consultationsNumber) {
        this.database.getClient(clientId).then((client) => {
            const amount = client.tarif_fixe * consultationsNumber * client.indice_syntec;
            // Code to display the calculated amount in the UI
        }).catch((err) => {
            console.error(err);
        });
    }

    addPrestation() {
        // Code to get prestation data from the form
        const prestation = {
            id_client: 0, // Replace with form data
            nombre_consultations: 0, // Replace with form data
            montant: 0 // Replace with form data
        };

        this.database.addPrestation(prestation).then(() => {
            this.loadPrestations();
        }).catch((err) => {
            console.error(err);
        });
    }

    editPrestation() {
        // Code to get prestation data from the form
        const id = 0; // Replace with form data
        const prestation = {
            id_client: 0, // Replace with form data
            nombre_consultations: 0, // Replace with form data
            montant: 0 // Replace with form data
        };

        this.database.updatePrestation(id, prestation).then(() => {
            this.loadPrestations();
        }).catch((err) => {
            console.error(err);
        });
    }

    deletePrestation() {
        // Code to get prestation id from the form
        const id = 0; // Replace with form data

        this.database.deletePrestation(id).then(() => {
            this.loadPrestations();
        }).catch((err) => {
            console.error(err);
        });
    }
}

module.exports = { Prestation };

