const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.genrateLeagueNumber = functions.https.onCall(async (data, context) => {
  const leagueName = data.leagueName;
  const uid = context.auth.uid;
  const userRef = admin.firestore().collection("users").doc(uid);
  const doc = await userRef.get();
  const user = doc.data();

  while (true) {
    let randomNumber = Math.floor(1000 + Math.random() * (99999 - 1000 + 1));
    randomNumber = randomNumber.toString();
    const league = admin.firestore().collection("leagues").doc(randomNumber);
    const doc = await league.get();
    if (!doc.exists) {
      admin
        .firestore()
        .collection("leagues")
        .doc(randomNumber.toString())
        .set({
          leagueNumber: randomNumber,
          leagueName: leagueName,
          leagueAdmin: { uid: uid, nickName: user.nickName, image: user.image },
          players: [{ uid: uid, nickName: user.nickName, image: user.image }],
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });
      return randomNumber;
    }
  }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
