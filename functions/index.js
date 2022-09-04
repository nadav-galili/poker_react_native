const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.sayHello = functions.https.onCall((data, context) => {
  return "Hello from Firebase!";
});

exports.getTeamNum = functions.https.onCall(async (data, context) => {
  let randomNumber = Math.floor(1000 + Math.random() * (99999 - 1000 + 1));
  randomNumber = randomNumber.toString();
  const league = admin.firestore().collection("leagues").doc(randomNumber);
  // console.log("league", league);
  const doc = await league.get();
  // return doc;
  if (!doc.exists) {
    admin.firestore().collection("leagues").doc(randomNumber.toString()).set({
      leagueNumber: randomNumber,
      leagueName: "test",
    });
    return "no doc";
  } else {
    return "doc exists";
  }
  // if (!doc.exists) {
  //   console.log("No such document!");
  // } else {
  //   console.log("League already exists");
  //   alert("xxxxx");
  // }
});
// exports.newUserSignUp = functions.auth.user().onCreate((user) => {
//   return admin.firestore().collection("users").doc(user.uid).set({
//     email: user.email,
//     password: user.password,
//     image: user.image,
//     nickName: user.nickName,
//   });
// });
// import { fireDB, collection, query, where } from "../api/firebase";
// exports.generateTeam = functions.https.onCall((data, context) => {
//   const { collection, query, where, getDocs } = require("firebase/firestore");
//   const db = data.db;
//   //   const leagueName = data.leagueName;
//   async function generateTeamNumber(db) {
//     while (true) {
//       let randomNumber = Math.floor(1000 + Math.random() * (99999 - 1000 + 1));
//       const leaguesRef = collection(db, "leagues");
//       const q = query(leaguesRef, where("leagueNumber", "==", randomNumber));
//       const querySnapshot = await getDocs(q);
//       if (querySnapshot.empty) {
//         return randomNumber.toString();
//       }
//       //   let team = await Team.findOne({ teamNumber: randomNumber });
//       //   if (!team) return String(randomNumber);
//     }
//   }
//   generateTeamNumber(db)
//     .then((result) => {
//       console.log("resulttt", result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });
// exports.generateLeagueNumber = functions.https.onRequest((req, res) => {
//   let randomNumber = Math.floor(1000 + Math.random() * (99999 - 1000 + 1));
//   res.send(randomNumber.toString());
// });

// exports.generateRandomLeagueNumber = functions.https.onCall((data, context) => {
//   const fireDB = require("../api/firebase");
//   const { collection, query, where, getDocs } = require("firebase/firestore");
//   let getNumber = true;
//   while (getNumber) {
//     //   let randomNumber = Math.floor(1000 + Math.random() * (99999 - 1000 + 1));
//     let randomNumber = "555";

//     const leaguesRef = collection(fireDB, "leagues");
//     const q = query(leaguesRef, where("leagueNumber", "==", randomNumber));
//     const querySnapshot = getDocs(q);
//     if (querySnapshot.docs.length > 0) {
//       querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//       });
//     } else {
//       console.log("No such document!");
//       getNumber = false;
//       return randomNumber;
//     }
//   }
// });
// const generateLeagueNumber = async () => {
//   while (true) {
//     // console.log("doc,", doc(fireDB, "leagues", generateRandomNumber()));
//     let randomNumber = Math.floor(1000 + Math.random() * (99999 - 1000 + 1));
//     const leagueRef = query(
//       collection(fireDB, "leagues"),
//       where("leagues", "==", randomNumber)
//     );
//     const querySnapshot = await getDocs(leagueRef);
//     console.log("rrr", querySnapshot);
//     // const league = await getDoc(docRef);
//     // console.log("leagues", leagueRef);
//     if (!leagueRef) return randomNumber;
//   }
// };

// export default generateLeagueNumber;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
