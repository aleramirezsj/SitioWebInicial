  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
  import { getFirestore,
         collection, 
         addDoc, 
         getDocs, 
         onSnapshot, 
         deleteDoc, 
         doc,
         getDoc,
         updateDoc  } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBSzt8PkYShjtwDOArBWqSPw6w5Dw_nAUw",
    authDomain: "ingenieria-42564.firebaseapp.com",
    projectId: "ingenieria-42564",
    storageBucket: "ingenieria-42564.appspot.com",
    messagingSenderId: "976148273911",
    appId: "1:976148273911:web:e56e33131b19296536d1f2",
    measurementId: "G-TVZEN948LK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db=getFirestore();

  export const guardarProducto=(nombre,precio,rubro)=>{
    addDoc(collection(db, 'productos'),{nombre,precio,rubro})
  }
  export const listarProductos=()=>getDocs(collection(db,'productos'))
  
  export const onGetProductos=(callback)=>onSnapshot(collection(db,"productos"),(callback))

  export const deleteProducto=id=>deleteDoc(doc(db,"productos",id))

  export const getProducto=id=>getDoc(doc(db,"productos",id))

  export const updateProducto=(id,productoEditado)=>
    updateDoc(doc(db,"productos",id),productoEditado)