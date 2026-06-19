import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4jgE2XjpDp1kIL6l5k7Pl24DMD5c5B54",
  authDomain: "ai-prompt-sharing-57324.firebaseapp.com",
  projectId: "ai-prompt-sharing-57324",
  storageBucket: "ai-prompt-sharing-57324.firebasestorage.app",
  messagingSenderId: "404700313279",
  appId: "1:404700313279:web:2bef2a170643cee0fd380a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);