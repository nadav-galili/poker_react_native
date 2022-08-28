import { fireDB, collection, query, where } from "../api/firebase";

const generateLeagueNumber = async () => {
  while (true) {
    // console.log("doc,", doc(fireDB, "leagues", generateRandomNumber()));
    let randomNumber = Math.floor(1000 + Math.random() * (99999 - 1000 + 1));
    const leagueRef = query(
      collection(fireDB, "leagues"),
      where("leagues", "==", randomNumber)
    );
    const querySnapshot = await getDocs(leagueRef);
    console.log("rrr", querySnapshot);
    // const league = await getDoc(docRef);
    // console.log("leagues", leagueRef);
    if (!leagueRef) return randomNumber;
  }
};

export default generateLeagueNumber;
