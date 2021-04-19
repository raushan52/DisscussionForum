
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbserviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://communityforum-f833c.firebaseio.com",
});

module.exports = admin;