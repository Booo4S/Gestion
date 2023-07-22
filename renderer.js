// renderer.js
// Importing required modules
const { Client } = require('./client');
const { Prestation } = require('./prestation');
const { Expertise } = require('./expertise');
const { Database } = require('./database');

// Creating new instances
const client = new Client();
const prestation = new Prestation();
const expertise = new Expertise();
const database = new Database();

// Function to initialize the application
function init() {
    // Load clients
    client.loadClients();

    // Event listeners for navigation
    document.getElementById('home').addEventListener('click', () => {
        document.getElementById('home-section').style.display = 'block';
        document.getElementById('client-section').style.display = 'none';
        document.getElementById('devis-section').style.display = 'none';
    });

    document.getElementById('client').addEventListener('click', () => {
        document.getElementById('home-section').style.display = 'none';
        document.getElementById('client-section').style.display = 'block';
        document.getElementById('devis-section').style.display = 'none';
    });

    document.getElementById('devis').addEventListener('click', () => {
        document.getElementById('home-section').style.display = 'none';
        document.getElementById('client-section').style.display = 'none';
        document.getElementById('devis-section').style.display = 'block';
    });

    // Event listeners for buttons
    document.getElementById('add-client').addEventListener('click', client.addClient);
    document.getElementById('edit-client').addEventListener('click', client.editClient);
    document.getElementById('delete-client').addEventListener('click', client.deleteClient);
    document.getElementById('save-client').addEventListener('click', client.saveClient);

    // Event listener for form submission
    document.getElementById('devis-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const clientId = document.getElementById('client-select').value;
        const consultationsNumber = document.getElementById('consultations-number').value;
        prestation.calculateAmount(clientId, consultationsNumber);
    });
}

// Initialize the application
window.onload = init;