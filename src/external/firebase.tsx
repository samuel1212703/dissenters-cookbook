import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBru6g5H3t6_sxB8JiFYl7psi4gue2tNhA",
  authDomain: "dissenters-cookbook.firebaseapp.com",
  projectId: "dissenters-cookbook",
  storageBucket: "dissenters-cookbook.appspot.com",
  messagingSenderId: "1015669851052",
  appId: "1:1015669851052:web:281c15d779801cc9a4f009",
  measurementId: "G-R4YFHX19K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Create a reference with an initial file path and name
const storage = getStorage();

export function downloadFirearmRar(gunName: string) {
  const storageRef = ref(storage, gunName.replace(" ", "") + ".rar");

  getDownloadURL(storageRef)
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';

      xhr.onload = () => {
        if (xhr.status === 200) {
          const blob = xhr.response;

          // Create an anchor element with the download attribute and text content
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = gunName.replace(" ", "") + ".rar";
          link.textContent = `Download ${gunName}`;
          
          // Append the link to the body and click it
          document.body.appendChild(link);
          link.click();

          // Remove the link from the body
          document.body.removeChild(link);
        } else {
          console.error('XHR Error:', xhr.statusText);
        }
      };

      xhr.open('GET', url);
      xhr.send();
    })
    .catch((error) => {
      console.error('Error getting download URL:', error);
    });
}


