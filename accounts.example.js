/**
 * Exemple of a file defining default admin account
 *
 * Must be copied into ./data/accounts.js and always be on .gitignore
 */

var adminPassword;
// ADMIN_PASSWORD must be set in Heroku
if (!process.env.ADMIN_PASSWORD){
    adminPassword = 'demo';
} else {
    adminPassword = process.env.ADMIN_PASSWORD;
}
module.exports = {
    admin:{
        username:'admin',
        password:adminPassword
    }
};
