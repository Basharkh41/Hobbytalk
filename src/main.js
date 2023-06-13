import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import { getAuth,connectAuthEmulator } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAleHW_CJw0pcrtOewWLml2CmYKtqf8i-U",
  authDomain: "fire-base-ba6b9.firebaseapp.com",
  projectId: "fire-base-ba6b9",
  storageBucket: "fire-base-ba6b9.appspot.com",
  messagingSenderId: "561310101257",
  appId: "1:561310101257:web:e9f4fa21437e838069edd8"
};

// Initialize Firebase
initializeApp(firebaseConfig)

if (location.hostname === "localhost:8080") {
  connectAuthEmulator(getAuth(), "http://127.0.0.1:9099");
}

const app = createApp(App)

app.use(router)

app.mount('#app')
