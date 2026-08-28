import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import Logout from "../Components/Pages/Logout";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Navbar hide on login/logout */}
      {location.pathname !== "/login" &&
       location.pathname !== "/logout" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

      {/* Footer hide on login/logout */}
      {location.pathname !== "/login" &&
       location.pathname !== "/logout" && <Footer />}
    </>
  );
}

export default App;