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

  console.log(result);

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }))[0];

  console.log(user);
  return user;
}

export async function addProfileToAccount(id, name, address, pincode) {
  console.log(id);
  const res = await firebase
    .firestore()
    .collection("users")
    .doc(id)
    .update(
      { name: name, address: address, pincode: pincode },
      { merge: true }
    );

  console.log(res);
}

export async function addPackage(id, packageName, packagePrice) {
  console.log(id, packagePrice, packageName);
  const res = await firebase
    .firestore()
    .collection("users")
    .doc(id)
    .update({ packageName: packageName, packagePrice: packagePrice });
}
