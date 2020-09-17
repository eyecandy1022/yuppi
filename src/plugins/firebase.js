import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
  // ここにfirebaseのapi情報をコピペします。
  apiKey: "AIzaSyBgBfPoJJxeHQt7zAgXwJ4DxDnSkJOheoU",
  authDomain: "yuppi-238pj.firebaseapp.com",
  databaseURL: "https://yuppi-238pj.firebaseio.com",
  projectId: "yuppi-238pj",
  storageBucket: "yuppi-238pj.appspot.com",
  messagingSenderId: "990744721779",
  appId: "1:990744721779:web:3497586ec037db2f18ed06",
  measurementId: "G-2HFQX767PG"

});

export const db = firebaseApp.firestore();