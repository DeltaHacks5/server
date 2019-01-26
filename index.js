const functions = require("firebase-functions")
const express = require("express")
var admin = require('firebase-admin');

var serviceAccount = require('./env/serviceAccount.json');

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG);
adminConfig.credential = admin.credential.cert(serviceAccount);
admin.initializeApp(adminConfig);

/* Express */
const app1 = express()
app1.get("*", (request, response) => {
  response.send("Hello from Express on Firebase!")
})

const api1 = functions.https.onRequest(app1)

module.exports = {
  api1
}
