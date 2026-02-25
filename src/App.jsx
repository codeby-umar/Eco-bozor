import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import SignUp from "./Auth/Sign_Up.jsx";
import SignIn from "./Auth/Sign_In.jsx";
import Home from "./pages/HomePages.jsx";
import Layout from "./layout/Layout.jsx";
import Contact from "./pages/Contact.jsx";
import Shopping from "./pages/Shopping.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ShoppingId from "./pages/Shoppingid.jsx";
import Notfound from "./components/Notfound.jsx";
import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout>
              <Shopping />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/shop:id"
          element={
            <Layout>
              <ShoppingId />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <ShoppingCart />
            </Layout>
          }
        />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
