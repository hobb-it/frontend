import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import NoPage from "./pages/NoPage";
import LoginPage from "./pages/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="452857993338-u1mklagjq8b35dadb1n4ldq39ell7pid.apps.googleusercontent.com">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
