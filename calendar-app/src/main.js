import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false
Vue.use(VueTextareaAutosize)

firebase.initializeApp({
    apiKey: "AIzaSyCt6KXMERKZ42y4sEG2t7BbFaJCldKXJ6s",
     authDomain: "vue-calendar-5863e.firebaseapp.com",
     databaseURL: "https://vue-calendar-5863e.firebaseio.com",
     projectId: "vue-calendar-5863e",
     storageBucket: "vue-calendar-5863e.appspot.com",
     messagingSenderId: "179844507228",
     appId: "1:179844507228:web:a2749c4ddf8960bd4f2899"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
