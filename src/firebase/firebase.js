import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBrXEQXj6Ea-txhxE7Rqoc9FkKbcvhBOQQ",
  authDomain: "random-quote-generator-a39e6.firebaseapp.com",
  databaseURL: "https://random-quote-generator-a39e6.firebaseio.com",
  projectId: "random-quote-generator-a39e6",
  storageBucket: "",
  messagingSenderId: "779183954873",
  appId: "1:779183954873:web:0e37b3fe0b34cd93"
};

firebase.initializeApp(config);

export default firebase;