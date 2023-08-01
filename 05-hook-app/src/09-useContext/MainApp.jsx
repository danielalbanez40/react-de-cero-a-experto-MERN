import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";
import NavBar from "./Navbar";
import UserProvider from "./context/UserProvider";

const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
       <NavBar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="*" element={<Navigate to={"/about"} />} />

        {/* <Route path="*" element={<LoginPage />} /> */}
      </Routes>
    </UserProvider>
  );
};

export default MainApp;
