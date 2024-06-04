import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/AuthPages/LoginPage";
import SignupPage from "../pages/AuthPages/SignupPage";
import LogoutPage from "../pages/AuthPages/LogoutPage";
import Homepg from "../pages/Homepg";
import BlogsPages from "../pages/Blogpag/BlogsPages";
import ProductPg from "../pages/ProductPages/ProductPg";
import FullBlogPage from "../pages/Blogpag/FullBlogPage";
import CreateForm from "./BlogsCommponets/CreateForm";
import UpdateForm from "./BlogsCommponets/UpdateForm";
import Header from "./HeaderCommponets/Header";
import RequierAuth from "./AuthCommponets/RequierAuth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/logout" element={<LogoutPage />} />
          <Route exact path="/home" element={<Homepg />} />
          <Route
            path="/Product"
            element={
              <RequierAuth>
                <ProductPg />
              </RequierAuth>
            }
          />
          <Route
            path="/list"
            element={
              <RequierAuth>
                {" "}
                <BlogsPages />{" "}
              </RequierAuth>
            }
          />

          <Route path="/blog/:id" element={<FullBlogPage />} />
          <Route
            path="/CreateBlog"
            element={
              <RequierAuth>
                <CreateForm />
              </RequierAuth>
            }
          />
          <Route
            path="/Edit"
            element={
              <RequierAuth>
                <UpdateForm />
              </RequierAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
