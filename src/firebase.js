import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDGRHl5L5vpkJtJlCow4NearOMN3J8Woi4',
  authDomain: 'qr-app-d9235.firebaseapp.com',
  projectId: 'qr-app-d9235',
  storageBucket: 'qr-app-d9235.appspot.com',
  messagingSenderId: '803793729616',
  appId: '1:803793729616:web:86049137d365f2858bb955',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
