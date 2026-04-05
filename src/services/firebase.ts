import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBoO1A3wD87ynURb1baN4A0cOHtbQ_QAv0",
  authDomain: "magnoliaroyale-b5afb.firebaseapp.com",
  projectId: "magnoliaroyale-b5afb",
  storageBucket: "magnoliaroyale-b5afb.firebasestorage.app",
  messagingSenderId: "677615616446",
  appId: "1:677615616446:web:791d3503cbf9c95555b9ef",
  measurementId: "G-4MTNC1FWPF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);