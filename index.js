const functions = require("firebase-functions")
const express = require("express")
var admin = require('firebase-admin');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); //need to parse HTTP request body

var serviceAccount = require('./env/usercreds.json');

// const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// adminConfig.credential = admin.credential.cert(serviceAccount);
// admin.initializeApp(adminConfig);


admin.initializeApp({
  credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "sport-scanner-229806",
    "private_key_id": "ddd983d442f0397169767a98118937cc163c1ab9",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDo5uGgIFa4l8Vl\nn2rLQPgjyNNUfZ7iz6YVPYIDpTUtgVG0kBbZnmEnkKWeE+ikHvC3CsEdkTJvzAlY\n25kU05H0ECw0qCNrf+AOXcafMPOGMxmKWMg7EIFuLSzXm64PvMqyqgal/cP3Vslx\ndpAS9VK0SixEgVf2BhMSBNDBJfI9/n0M1nPMlp2Uvb+ohg/BW9XZrdhh7J0WBmPE\nP16yN+eDkiCBJkT4za2PHhOVnlJkhfoOF7NpuMt/2evGxaMY/B8kM+LXtGtgvw5A\nUo8SXWJUgEsQmFF/qZbw9VasgUtH8TSASrHpVIHy3UZqwBpV5n406ZB6TX2oLFDY\nrmMpkuFBAgMBAAECggEADs8xjRxJT2MNMP1OTd7TeHkKYQ681ejEw4h99ivg4gQd\nVSktXsiYnmqu8UqMSjVScp0rMu1a4ut7M6yBAydB2l5V5UJEwE7pCRjS6qfy8Ddb\nGiYzkzflNwOF3K7gRk1nqS0xD4h/l8Brvjx/BEmXqPGnd3KvDGyN9WEbghCe4uym\n6oSWw+rT6epmLG1vBk07jJIc1MzYwEicTsABjHXZvG6E8Vq/HtJpaPlgjWG3OygE\nTkg7yhmUaJ6hYkJP7viHwnOWaoes4CXP7dGgTyy0wKpP8Zz5BoHS3rto0KWzvhml\n0uzw46Y5TdreBrsbyx2LI2dof0eZzWQi+baBUuFAXQKBgQD2YrH3ok839OlWYELZ\nI+j81Sk870dc2DwLHNjzhzjOTzX0E0DyACFY0BSTd278qbpD7M8DsmtXPj10YMG8\nqWllteB1NalLIqSWiF/SWWp0RzWxnOI6ZgHptw8Odo8GX+i5VpDKZB8wJUOBsB/7\nH3hqf00OVHFovIus0sqQjAf1BQKBgQDx/X1AWI/N46F6qaPc/M4ZDn2cLM1shoDC\n4JqpvOb5fRRCrNnyCzVHMThus5muWjHrlnJRLu7RiwEDl3x2eZ6RAp2FzIxiJ2x1\nYEg96Nlg/3sP5XTnK2r9b9GzHP0iSVzQ0xd13eCnkmamRLMaTLloMjjbfQJs3CaJ\n5Kgf31iwDQKBgQDpISvZ76dbgA6FX2IBSfw7t4pkkNgKXsQ5k5somstCUyru/oTW\nNw9WlNTTUBAhXIvVl62thtYQX+EQTDkkxXvn9HclEJhWcrofgXyBcX/L9FE29QYO\nUdT/iunhOodMddWkAOfRyXjFOo0smjU4jWeIBVoo8/e3LahP58gpi4Y/7QKBgGRk\nqvLoCvj66AJQoKfMxeBFT71cJPlSL9cpgWDL+vMkfiRPO7gcCEV52RSsNCTOTImV\nh+XAV9ndFlWcIkmwmSVF9X4N52vNOUTU5gOxN4XzV+W3ZzGEpMVx/4iUjTwNPZFx\nEfmXTF2Y8jcmpztQ+1aMB2Sfz0LEbsSkdU+LxGp9AoGBAMFAOHLmZfxT9n8BYagb\nXC7cU+Eoa+8jAr7rxPosVTY3tE2Am1ekc+zs8BlCjA14i7QOoVEsJ1gHeSYEqqji\nGMHnBaxPXVDJXEcgC8V+i3zT/7J/l+nSeuFOBCRFn0L+aMKJWXofL54Wr3ZvGvvt\njhWNvMDss1/eUdnArXWJ36jp\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-fn1ac@sport-scanner-229806.iam.gserviceaccount.com",
    "client_id": "111123825964846299863",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fn1ac%40sport-scanner-229806.iam.gserviceaccount.com"
  }),
  databaseURL: 'https://sport-scanner-229806.firebaseio.com'
});


// admin.credential.cert(serviceAccount);
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://sport-scanner-229806.firebaseio.com"
// });
// admin.initializeApp({
//   databaseURL: "https://sport-scanner.firebaseio.com",
//   credential: admin.credential.cert({
//     projectId: "sport-scanner",
//     clientEmail: "firebase-adminsdk-byc9xy@sport-scanner.iam.gserviceaccount.com",
//     private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCLYkbg3GUQXMKJ\nlI6rEhx+7QV1iSmRM/Iqt4BRPRg1MsKJHs29G91+5nzvP1SvNc2bMGIQSqtPMEg9\nZpo4EFfIUthEdQ8IeA1bqxs51ode5zUnj2vdV/siLtJ6Kzr3v5TB2wURy2WI7E1g\nb3KzHLaw6WCg3Ol2fYfchzc7bWfMc4zhg3lJBPnQOC+mDVnIlIADev6eYuOMqSO8\nxH5qAX2QHz2Fbw/8S+Wpdo4DeFdjpgwLz8IJm+pxjzWikcodNAwmd01Zxlc2Axni\ncjf6UwdcmAXmJxqtVKKKGM26Rh0TcXst8cZKjOVJKC8MCMeqqabWTQUYzm1oM7V9\nv/SoEYiJAgMBAAECggEAHIYGkjKX/gK1jtkXXxvMOA9CLDzfBEd4mdRGjpltkEls\ndQoYOUhwCe2aCI3Rwy9D/aunjcTyDLkJN4N9MNbrV+PYPR4lbuq+dRFtd2cW+c1f\n29ImVTwRePvS98xL+3I5u3gaL/uLMjuFVCRKeSv5mPeRXioHHsfumysSmvc3JCf+\nDYI28+fzwpvpKWfh9xIyt71pGvHY1V7XEqGocj7Fxt1Ynb5A9msDNJZ7G97++5YT\nXVEXEdc3fyiUsfG26y3+9Zb3QPhpsIIwPthPwsZe9//GMI7fHoyhMgjlMTyJSxUD\nQ5D3thsf3hvXqNdkVpnxZYBtUN/R3F9f3fnUMyd2RwKBgQC/JH5GkGTssJQzAdUZ\nHro9yf8PrelqLOlJVBS+G3uGK7pkYi13m9pH78598Xj/Rs8TdVFQSvuD6g+x+bXj\n8ynSCNROvPwZz0pyrGpt1krDYh+JPNCTrJjwMX3VlCqeMh0r7xgVogh6CUSqgDkU\nPeICm1B27RQXvtOX4SMQCcoTPwKBgQC6rcrdmuW1yOuLAQZ0R1ETmmHj/r5nzJ11\nHlWATmKw73U55ME23KaJFs2HaXKSgGbxpsICQJxsekTBH2+a+m0jjVAi2jjLiGA9\n5sGobfU9VpXNe9I+U5IePQpYEtVnUE07FkO/bllzv7VKcrC/AIG9r3ma3kGZEUvN\nJhTjEo0aNwKBgFY5pC043g5X6cLIxNS8I8/T25e7IFyhPeuyXlkUFLkF6ON31oLq\nb6Gb8E6oK6kczDU+6xuJd8SeRc5Hk2HtQ6RYD04luqP5+t+YH7rEvJ0/GnLSWFUF\nu0g/S0CZwk/y024KQZcgrSpAHBW+GgGjmN0MK1Q6xqGfl9wf161YfSwJAoGAFxS7\n23B2bGZ+MP6cdK4IqTrSVaU+l4jmAwAQJEAM1cGVpeXRud3IPXTzToXMI676i3BJ\n1ot0i7kGXTZszyWdbuLfAKAom4muFJk+YnvN8ZqOBQ0FLq2YiGKVr9QMTKzSD7cu\nAzI6nyQZ3y2VCtieMfzLNUm7pJhN3fySYoz9ozsCgYAEqg910ODirl+pqlKpbPNv\nohhbyergxsjKzMTOYneq0o9fa4p+YmT1/9Z9tuJ1lon3RPo9bV6/PW+UIeBjSgFc\nPpObUz7nWwiNyLQ/sayXiXs0Q/VZDwpeKavPlhpZ9p9k+48/+o6dsIZFpQKDNKnX\nTlck74M5IxJr63gIbp3qKA==\n-----END PRIVATE KEY-----\n",
//   }),
// })

// var config = {
//   apiKey: "AIzaSyCSeuA7zfQ54CCgM0HjrE_yjDUjetXUlgM",
//   authDomain: "sport-scanner.firebaseapp.com",
//   databaseURL: "https://sport-scanner.firebaseio.com",
//
//   storageBucket: "sport-scanner.appspot.com",
//   messagingSenderId: "1005197218391"
// };

var db = admin.database();
app.get('/', function (req, res) {

	console.log("HTTP Get Request");
	var userReference = db.ref("/Group/");

	//Attach an asynchronous callback to read the data
	userReference.on("value",
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					},
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

app.put('/', function (req, res) {

	console.log("HTTP Put Request");

  var amenity = req.body.Amenity;
	var count = req.body.Count;
	var member = req.body.Member;
	var name = req.body.Name;
  var park = req.body.Park;
  var time = req.bogy.Time;

	var referencePath = '/Group/';
	var userReference = firebase.database().ref(referencePath);
	userReference.set({Amenity: amenity, Count: count, Member: member,
  Name: name, Park: park, Time: time},
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					}
					else {
						res.send("Data saved successfully.");
					}
			});
});

//Update existing instance
app.post('/', function (req, res) {

	console.log("HTTP POST Request");

  var amenity = req.body.Amenity;
	var count = req.body.Count;
	var member = req.body.Member;
	var name = req.body.Name;
  var park = req.body.Park;
  var time = req.bogy.Time;

	var referencePath = '/Group/';
	var userReference = firebase.database().ref(referencePath);
	userReference.update({Amenity: amenity, Count: count, Member: member,
  Name: name, Park: park, Time: time},
				 function(error) {
					if (error) {
						res.send("Data could not be updated." + error);
					}
					else {
						res.send("Data updated successfully.");
					}
			    });
});
