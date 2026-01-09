import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import UserProfile from "./components/UserProfile";
import CreateAccount from "./components/CreateAccount";
import Cart from "./components/Cart";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import { useState } from "react";
import ProtectedRouting from "./components/ProtectedRouting";

function App() {
  let [isLogin] = useState(true);
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path=""
          element={<ProtectedRouting isLogin={isLogin} type={1} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/profile" element={<UserProfile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route
          path=""
          element={<ProtectedRouting isLogin={isLogin} type={2} />}
        >
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
