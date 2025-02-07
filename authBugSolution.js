const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// Unsubscribe when the component unmounts or the listener is no longer needed
// this should be called in a cleanup function
export const cleanup = () => {
  unsubscribe();
}