import React, { useEffect } from "react";
import AuthStore from "../../storage/AuthStore";
import LoginPage from "./LoginPage";
import Header from "../../commponents/HeaderCommponets/Header";

function LogoutPage() {
  const store = AuthStore();
  useEffect(() => {
    store.logout();
  }, []);
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default LogoutPage;
