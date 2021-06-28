import firebase from "../firebase/firebase.utils";

export async function doesPhoneNumberExist(phoneNumber){
    const result = await firebase.firestore().collection("users").where("phoneNumber", "==", phoneNumber).get();
    console.log(result.docs)
    return result.docs.length > 0;
}