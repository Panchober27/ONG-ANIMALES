// Archivo de configuracion de context....
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import "firebase/auth";
import FirebaseContext from "../../contexts/firebaseContext";
import firebaseOptions from "./firebaseOptions";

const propTypes = {
  children: PropTypes.any,
};

function FirebaseProvider({ children }) {
  const [app, setApp] = useState(null);
  useEffect(() => {
    let result;
    if (global.firebaseProvider) {
      result = global.firebaseProvider;
    } else {
      result = !firebase.apps.length
        ? firebase.initializeApp(firebaseOptions)
        : firebase.app();
      global.firebaseProvider = result;
    }
    setApp(result);
  }, []);
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
}

FirebaseProvider.propTypes = propTypes;

export default FirebaseProvider;
