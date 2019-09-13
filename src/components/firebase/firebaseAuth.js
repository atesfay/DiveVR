import fire from "../firebase/firebaseInit.js"

export function login(email, password) {
    return fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return true;
      })
      .catch(function(error) {
        console.log(error.code)
      });
}

export function signUp(email, password) {
  return fire 
    .auth()
    .createUserWithEmailAndPassword(email, password);
} // apple