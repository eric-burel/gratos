/**
 * Sets up the default accounts
 */
var adminPassword;
// ADMIN_PASSWORD must be set in heroku
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
