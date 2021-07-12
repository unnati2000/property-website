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

export async function addFlat(
  propertyName,
  address,
  roomType,
  price,
  value,
  area,
  parking,
  averagePrice,
  facing,
  description,
  urls,
  userId,
  userDocId
) {
  console.log(propertyName, userId, userDocId);
  const res = await firebase.firestore().collection("property").add({
    propertyName: propertyName,
    address: address,
    roomType: roomType,
    price: price,
    value: value,
    area: area,
    parking: parking,
    averagePrice: averagePrice,
    facing: facing,
    description: description,
    images: urls,
    userId: userId,
    userDocId: userDocId,
  });
}

export async function addVilla(
  villaAddress,
  villaArea,
  villaAveragePrice,
  furnishedStatus,
  possessionStatus,
  villaPrice,
  villaValue,
  villaBedroom,
  villaBathroom,
  villaDescription,
  urls,
  userId,
  userDocId
) {
  const res = await firebase.firestore().collection("property").add({
    address: villaAddress,
    price: villaPrice,
    value: villaValue,
    area: villaArea,
    averagePrice: villaAveragePrice,
    description: villaDescription,
    images: urls,
    furnishedStatus: furnishedStatus,
    possessionStatus: possessionStatus,
    villaBedroom: villaBedroom,
    villaBathroom: villaBathroom,
    userId: userId,
    userDocId: userDocId,
  });
}
