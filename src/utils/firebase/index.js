import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC0K0CdP1cnNX5LAU4L5Usy4674LOg5Nl8",
  authDomain: "crwn-clothing-db-d9691.firebaseapp.com",
  projectId: "crwn-clothing-db-d9691",
  storageBucket: "crwn-clothing-db-d9691.appspot.com",
  messagingSenderId: "508092990855",
  appId: "1:508092990855:web:824715711d8c5b5c783f22"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists())
  // if user exists
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (e) {
      console.log(e)
    }
  }
  // if user not exists
}