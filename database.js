
// Importing required modules
const mysql = require('mysql');

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'your_database'
        });
    }

    connect() {
        this.connection.connect((err) => {
            if (err) throw err;
            console.log('Connected to the database!');
        });
    }

    disconnect() {
        this.connection.end((err) => {
            if (err) throw err;
            console.log('Disconnected from the database!');
        });
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    getClient(id) {
        return this.query('SELECT * FROM clients WHERE id = ?', [id]);
    }

    getClients() {
        return this.query('SELECT * FROM clients');
    }

    addClient(client) {
        return this.query('INSERT INTO clients SET ?', client);
    }

    updateClient(id, client) {
        return this.query('UPDATE clients SET ? WHERE id = ?', [client, id]);
    }

    deleteClient(id) {
        return this.query('DELETE FROM clients WHERE id = ?', [id]);
    }

    getPrestation(id) {
        return this.query('SELECT * FROM prestations WHERE id = ?', [id]);
    }

    getPrestations() {
        return this.query('SELECT * FROM prestations');
    }

    addPrestation(prestation) {
        return this.query('INSERT INTO prestations SET ?', prestation);
    }

    updatePrestation(id, prestation) {
        return this.query('UPDATE prestations SET ? WHERE id = ?', [prestation, id]);
    }

    deletePrestation(id) {
        return this.query('DELETE FROM prestations WHERE id = ?', [id]);
    }

    getExpertise(id) {
        return this.query('SELECT * FROM expertises WHERE id = ?', [id]);
    }

    getExpertises() {
        return this.query('SELECT * FROM expertises');
    }

    addExpertise(expertise) {
        return this.query('INSERT INTO expertises SET ?', expertise);
    }

    updateExpertise(id, expertise) {
        return this.query('UPDATE expertises SET ? WHERE id = ?', [expertise, id]);
    }

    deleteExpertise(id) {
        return this.query('DELETE FROM expertises WHERE id = ?', [id]);
    }
}

module.exports = { Database };

