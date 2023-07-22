
// Importing required modules
const { Database } = require('./database');

class Expertise {
    constructor() {
        this.database = new Database();
        this.database.connect();
    }

    loadExpertises() {
        this.database.getExpertises().then((expertises) => {
            // Code to display expertises in the UI
        }).catch((err) => {
            console.error(err);
        });
    }

    addExpertise() {
        // Code to get expertise data from the form
        const expertise = {
            id_client: 0, // Replace with form data
            nombre_expertises: 0 // Replace with form data
        };

        this.database.addExpertise(expertise).then(() => {
            this.loadExpertises();
        }).catch((err) => {
            console.error(err);
        });
    }

    editExpertise() {
        // Code to get expertise data from the form
        const id = 0; // Replace with form data
        const expertise = {
            id_client: 0, // Replace with form data
            nombre_expertises: 0 // Replace with form data
        };

        this.database.updateExpertise(id, expertise).then(() => {
            this.loadExpertises();
        }).catch((err) => {
            console.error(err);
        });
    }

    deleteExpertise() {
        // Code to get expertise id from the form
        const id = 0; // Replace with form data

        this.database.deleteExpertise(id).then(() => {
            this.loadExpertises();
        }).catch((err) => {
            console.error(err);
        });
    }
}

module.exports = { Expertise };

