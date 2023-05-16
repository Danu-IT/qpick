import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { ProdictI } from "../interfaces/data"
import  { db } from "./config"

export const saveItem = async (data: ProdictI) => {
    await setDoc(doc(db, "productsItems", `${Date.now()}`), data, {merge: true});
}

export const getAllProductItems = async () => {
    const items = await getDocs(query(collection(db, "productsItems"), orderBy("id", "desc")));
    return items.docs
}