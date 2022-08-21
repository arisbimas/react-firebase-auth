import logo from "./logo.svg";
import "./App.css";
// import { AuthContextPrvider } from "./Contexts/AuthContext";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Login } from "./Page/Login";
import Dashboard from "./Page/Dashboard";
import { AuthContextPrvider } from "./Contexts/AuthContext";
import { ProtectedUser } from "./Global/ProtectedUser";

function App() {
  return (
    <div className="App">
      <AuthContextPrvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route
              path="dashboard"
              element={
                <ProtectedUser>
                  <Dashboard />
                </ProtectedUser>
              }
            />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthContextPrvider>
    </div>
  );
}

export default App;
