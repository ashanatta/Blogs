import React from "react";
import Header from "../commponents/HeaderCommponets/Header";
import "bootstrap/dist/css/bootstrap.css";
import FatchBlog from "../commponents/Home/FatchBlog";
import Footer from "../commponents/FooterCommponets/Footer";
function Homepg() {
  return (
    <div>
      <Header />
      <FatchBlog />
      <Footer />
    </div>
  );
}

export default Homepg;
