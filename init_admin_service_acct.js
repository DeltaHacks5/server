var admin = require('firebase-admin');

var serviceAccount = require('./env/google-services.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sport-scanner.firebaseio.com/'
});
