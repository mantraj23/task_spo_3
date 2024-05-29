import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/signuppage";
import LoginPage from "./components/loginpage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path= "/" element = {<SignupPage></SignupPage>}></Route>
            <Route path= "/login" element = {<LoginPage></LoginPage>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
