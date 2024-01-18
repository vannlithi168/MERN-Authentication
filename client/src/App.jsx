import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
