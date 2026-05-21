// Importaciones principales de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

// Configuración de tu proyecto Finance-casa
const firebaseConfig = {
  apiKey: "AIzaSyBJfJkR6GKG0oJeUl6B3OR46kA5h9gFqCI",
  authDomain: "finance-casa.firebaseapp.com",
  projectId: "finance-casa",
  storageBucket: "finance-casa.firebasestorage.app",
  messagingSenderId: "482815043136",
  appId: "1:482815043136:web:ab8687fb6016de975b61a5",
  measurementId: "G-KR3T811JRL"
};

// Inicialización de la aplicación y los servicios
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Exportación para usar en el resto de la aplicación
export { app, analytics, auth };