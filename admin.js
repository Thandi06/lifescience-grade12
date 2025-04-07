<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAGt1_ODGwGmwrg4QYUAfvi6J8ETVt9U84",
    authDomain: "grade12lifesciences.firebaseapp.com",
    projectId: "grade12lifesciences",
    storageBucket: "grade12lifesciences.firebasestorage.app",
    messagingSenderId: "224227627756",
    appId: "1:224227627756:web:711b1bfcfa53bc25034bc9",
    measurementId: "G-ZLT923N837"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>