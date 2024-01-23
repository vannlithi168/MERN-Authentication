import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import RegisterForm from "./pages/UserRegisterForm";
import LoginForm from "./pages/LoginForm";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
