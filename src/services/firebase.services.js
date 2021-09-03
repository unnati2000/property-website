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

export async function addProfileToAccount(
  id,
  name,
  address,
  pincode,
  profilePic,
  longitude,
  latitude
) {
  const res = await firebase.firestore().collection("users").doc(id).update(
    {
      name: name,
      address: address,
      pincode: pincode,
      latitude: latitude,
      longitude: longitude,
      profilePic: profilePic,
    },
    { merge: true }
  );
}

export async function addPackage(id, packageName, packagePrice) {
  await firebase
    .firestore()
    .collection("users")
    .doc(id)
    .update({ packageName: packageName, packagePrice: packagePrice });
}

export async function addFlat(
  plan,
  propertyName,
  address,
  latitude,
  longitude,
  roomType,
  price,
  value,
  area,
  parking,
  averagePrice,
  facing,
  flatDescription,
  urls,
  flatFurnishedStatus,
  flatBathroom,
  flatBrokerage,
  userId,
  userDocId
) {
  await firebase
    .firestore()
    .collection("property")
    .add({
      propertyType: plan,
      propertyName: propertyName,
      address: {
        ...address,
        formattedAddress: [address.areaName, address.city, address.district],
      },
      latitude: latitude,
      longitude: longitude,
      roomType: roomType,
      price: price,
      value: value,
      area: area,
      parking: parking,
      averagePrice: averagePrice,
      facing: facing,
      description: flatDescription,
      images: urls,
      furnishedStatus: flatFurnishedStatus,
      bathroom: flatBathroom,
      flatBrokerage: flatBrokerage,
      userId: userId,
      userDocId: userDocId,
    });
}

export async function addVilla(
  plan,
  address,
  latitude,
  longitude,
  villaArea,
  villaAveragePrice,
  furnishedStatus,
  possessionStatus,
  villaPrice,
  villaValue,
  villaBedroom,
  villaBathroom,
  villaDescription,
  villaFacing,
  brokerage,
  urls,
  ammenities,
  userId,
  userDocId
) {
  await firebase.firestore().collection("property").add({
    propertyType: plan,
    address: address,
    latitude: latitude,
    longitude: longitude,
    price: villaPrice,
    value: villaValue,
    area: villaArea,
    averagePrice: villaAveragePrice,
    description: villaDescription,
    images: urls,
    ammenities: ammenities,
    furnishedStatus: furnishedStatus,
    possessionStatus: possessionStatus,
    villaBedroom: villaBedroom,
    villaBathroom: villaBathroom,
    facing: villaFacing,
    brokerage: brokerage,
    userId: userId,
    userDocId: userDocId,
  });
}

export async function addProject(
  plan,
  builderName,
  projectPropertyName,
  address,
  latitude,
  longitude,
  listOfBHK,
  projectPossessionStatus,
  projectAveragePrice,
  minCarpetSize,
  maxCarpetSize,
  urls,
  oneRK,
  oneBHK,
  twoBHK,
  threeBHK,
  fourBHK,
  fiveBHK,
  ammenities,
  projectDescription,
  userId,
  userDocId
) {
  await firebase.firestore().collection("property").add({
    propertyType: plan,
    builderName: builderName,
    project: projectPropertyName,
    address: address,
    latitude: latitude,
    longitude: longitude,
    listOfBHK: listOfBHK,
    possessionStatus: projectPossessionStatus,
    averagePrice: projectAveragePrice,
    minCarpetSize: minCarpetSize,
    maxCarpetSize: maxCarpetSize,
    images: urls,
    oneRK: oneRK,
    oneBHK: oneBHK,
    twoBHK: twoBHK,
    threeBHK: threeBHK,
    fourBHK: fourBHK,
    fiveBHK: fiveBHK,
    description: projectDescription,
    ammenities: ammenities,
    userId: userId,
    userDocId: userDocId,
  });
}

export async function addEnquiry(
  phoneNumber,
  name,
  email,
  availableOn,
  agentUserId,
  agentUserDocId,
  propertyDocId,
  bathroom,
  bedroom,
  parking,
  propertyType,
  propertyName,
  image,
  address
) {
  await firebase.firestore().collection("enquiry").add({
    phoneNumber: phoneNumber,
    name: name,
    email: email,
    roomType: availableOn,
    agentUserId: agentUserId,
    agentUserDocId: agentUserDocId,
    propertyDocId: propertyDocId,
    bathroom: bathroom,
    bedroom: bedroom,
    parking: parking,
    propertyType: propertyType,
    propertyName: propertyName,
    image: image,
    address: address,
  });
}
