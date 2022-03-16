// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBkZ4eBN2BsbHwfLRd5SSGVW446hTFvqWM",
  authDomain: "aplikacja-do-planowania.firebaseapp.com",
  projectId: "aplikacja-do-planowania",
  storageBucket: "aplikacja-do-planowania.appspot.com",
  messagingSenderId: "198946980109",
  appId: "1:198946980109:web:af44dbcc0a705bbb6cf044",
  measurementId: "G-S5BQMW7PZ5",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  // const notificationOptions = {
  //   body: payload.notification.body,
  //   image: payload.notification.image,
  // };
  const notificationOptions = payload.notification.body;
  const notificationImage = payload.notification.image;
  self.registration.showNotification(notificationTitle, notificationOptions, notificationImage);
});
