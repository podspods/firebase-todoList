// import { useStore } from "@nanostores/react";
import { addDoc, collection } from "@firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 


import { useStore } from "@nanostores/react";
import { redirect } from "react-router";
import { firebaseDb } from "../lib/Firebase";


export async function testDB(){
  await setDoc(doc(firebaseDb, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });

}

/**
 * this componnent is for test , should be terminate on release 
 */
export default  function OutputTest() {

testDB()

  return (
    <>
      <h1>Inscription</h1>
      <p> VITE_FIREBASE_AUTH_DOMAIN : [{ import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}]</p>
      <p> VITE_FIREBASE_API_KEY : { import.meta.env.VITE_FIREBASE_API_KEY}</p>
      <p> VITE_FIREBASE_PROJECT_ID : { import.meta.env.VITE_FIREBASE_PROJECT_ID}</p>
      <p> VITE_FIREBASE_STORAGE_BUCKET : { import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}</p>
      <p> VITE_FIREBASE_APP_ID : { import.meta.env.VITE_FIREBASE_MSG_SENDER_ID}</p>
      <p> VITE_FIREBASE_APP_ID : { import.meta.env.VITE_FIREBASE_APP_ID}</p>


    </>
  );
}

