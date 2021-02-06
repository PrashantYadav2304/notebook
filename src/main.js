import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAhPhujDM6U0mXABkyfBkpnHpLQC3IvZvQ",
  authDomain: "smartnotebook-in.firebaseapp.com",
  databaseURL: "https://smartnotebook-in.firebaseio.com",
  projectId: "smartnotebook-in",
  storageBucket: "smartnotebook-in.appspot.com",
  messagingSenderId: "298959463669",
  appId: "1:298959463669:web:9bd30f5e5dfd17369ad1bc",
  measurementId: "G-2V1ES0191W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
