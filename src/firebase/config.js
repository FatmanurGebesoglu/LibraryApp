import  {initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC89Hdt1UvXG7PoCM2mbRdwz5F_fGFcLVE",
    authDomain: "libraryapp-9d522.firebaseapp.com",
    projectId: "libraryapp-9d522",
    storageBucket: "libraryapp-9d522.appspot.com",
    messagingSenderId: "906262558332",
    appId: "1:906262558332:web:f540555840894ec41afbf9",
    measurementId: "G-JGZ95GF4F4"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {db,auth};


