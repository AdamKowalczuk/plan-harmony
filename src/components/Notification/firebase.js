import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { log } from "react-modal/lib/helpers/ariaAppHider";
const firebaseConfig = {
  apiKey: "AIzaSyBkZ4eBN2BsbHwfLRd5SSGVW446hTFvqWM",
  authDomain: "aplikacja-do-planowania.firebaseapp.com",
  projectId: "aplikacja-do-planowania",
  storageBucket: "aplikacja-do-planowania.appspot.com",
  messagingSenderId: "198946980109",
  appId: "1:198946980109:web:af44dbcc0a705bbb6cf044",
  measurementId: "G-S5BQMW7PZ5",
};

// Initialize Firebase

initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey: "BG-3is361JsaNHEsPFAQHXfQCsk08a06go_EUe1vsK71lC67tfWn6f4_P_kkbC8JR1wOCnh_qTwg6MYscShk_1g",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        alert(currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log("No registration token available. Request permission to generate one.");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};
export const onMessageListener = () =>
  new Promise((resolve) => {
    console.log("onMessageListener");
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
