import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBDDKn_vlOqnqYnCM6vL9yKU0IzaoYmz-c',
  authDomain: 'seraprototip.firebaseapp.com',
  projectId: 'seraprototip',
  storageBucket: 'seraprototip.appspot.com',
  messagingSenderId: '925432504819',
  appId: '1:925432504819:web:f0768167c870fe89e83286',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
