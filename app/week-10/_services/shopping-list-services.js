import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * Retrieves all items for a specific user from Firestore.
 * @param {string} userId - The unique ID of the authenticated user.
 */
export async function getItems(userId) {
  const items = [];
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const q = query(itemsCollectionRef);
    const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
  items.push({
    id: doc.id,
    ...doc.data(),
  });
});
  } catch (error) {
    console.error("Error in getItems: ", error);
  }
  return items;
}

/**
 * Adds a new item to a specific user's items subcollection.
 * @param {string} userId - The unique ID of the authenticated user.
 * @param {object} item - The item object to add.
 */
export async function addItem(userId, item) {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollectionRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error in addItem: ", error);
  }
}