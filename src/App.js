import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  return (
    <div className="App">
      <GoogleOAuthProvider clientId="452857993338-u1mklagjq8b35dadb1n4ldq39ell7pid.apps.googleusercontent.com">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
