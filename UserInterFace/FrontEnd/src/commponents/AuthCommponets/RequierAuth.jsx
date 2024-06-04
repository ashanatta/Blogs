import React, { useEffect } from "react";
import AuthStore from "../../storage/AuthStore";
import { Navigate } from "react-router-dom";
function RequierAuth(props) {
  const store = AuthStore();
  useEffect(() => {
    if (store.loggedin === null) {
      store.checkAuth();
    }
  }, []);
  if (store.loggedin === null) {
    return <div>Loding...</div>;
  }
  if (store.loggedin === false) {
    return <Navigate to="/login" />;
  }
  return <div>{props.children}</div>;
}

export default RequierAuth;
