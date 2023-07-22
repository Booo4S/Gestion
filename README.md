# Gestion des Clients

This is a desktop application for managing clients, services, and expertises. It is built with JavaScript and uses a MySQL database.

## Features

- Client management
- Client record with fixed rate, Syntec index, number of expertises
- Addition, modification, and deletion of clients
- Entry of services
- Choice of client, number of consultations
- Calculation of the amount based on the fixed rate, Syntec index, expertises, and consultations
- Detail of the calculation
- Statistics
- Total turnover and per client
- Number of consultations per month
- Number of expertises carried out

## Constraints

- Application in French
- Use by a single person
- Clean and intuitive interface

## Technologies

- Language: JavaScript and a graphical interface for the desktop
- Database: MySQL

## Database Description

The database is called "votre_base_de_donnees" and has three main tables: clients, services, and expertises.

## Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the application with `npm start`

## Usage

1. Add, modify, or delete clients in the "Clients" tab
2. Enter services in the "Services" tab
3. View statistics in the "Statistics" tab

## Dependencies

- [Electron](https://www.electronjs.org/)
- [MySQL](https://www.npmjs.com/package/mysql)

## Development

This project uses Electron for the desktop application and MySQL for the database. It also uses electron-reload for hot-reloading during development.

## License

This project is licensed under the ISC License.

## Author

Your Name
