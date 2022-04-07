import "./App.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "./firebase.init";
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const handelsigUp = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user);
    });
  };
  return (
    <div className="App">
      <button onClick={handelsigUp}>Google sing up</button>
      <h4>Name:{user.displayName}</h4>
      <p> I Know Your Email :{user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
