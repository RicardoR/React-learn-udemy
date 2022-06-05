import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

import { firebaseConfig, firebaseConfigUT } from '../secret/firebaseAuth';

const env = process.env.NODE_ENV;
const config = env === 'development' ? firebaseConfig : firebaseConfigUT;

initializeApp(config);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
