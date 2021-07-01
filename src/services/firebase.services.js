import firebase from "../firebase/firebase.utils";

export async function doesPhoneNumberExist(phoneNumber) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("phoneNumber", "==", phoneNumber)
    .get();
  console.log(result.docs.length);
  return result.docs.length > 0 ? true : false;
}

export async function getUserDetailsByID(id) {
  console.log(id);
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", id)
    .get();
  console.log(
    result.docs.map((item) => ({
      ...item.data(),
      docId: item.id,
    }))[0]
  );
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }))[0];
  return user;
}

export async function addProfileToAccount(id, name, address, pincode) {
  console.log(id);
  const res = await firebase
    .firestore()
    .collection("users")
    .doc(id)
    .set({ name: name }, { merge: true });
}
