import React from "react";
import { Routes, Route } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/usAuthStore";

export const App = () => {

  const {authUser , isLoggedIn , login} = useAuthStore();
  console.log("is Auth User ", authUser);
  console.log("is user LoggedIn ", isLoggedIn);

  return (
    <div
      className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4
    overflow-hidden"
    >
      {/* DECORATORS – GRID BG & GLOW SHAPES */}
      {/* <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
        linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"/>
      <div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px]"/>
      <div className="absolute bottom-0 -right-4 size-96 bg-cyan-500 opacity-20 blur-[100px]"/> */}
      {/* DECORATORS – Chat UI Theme */}

      {/* Subtle dotted background (auto-adjusts for dark/light using currentColor) */}
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"></div>

      {/* Soft gradient overlay */}
      <div
        className=" absolute inset-0 bg-gradient-to-br from-primary/10 via-base-100/20 to-secondary/10 pointer-events-none"></div>

      {/* Top-left blob */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/30 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Bottom-right blob */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/30 blur-[120px] rounded-full pointer-events-none"></div>

      <button className="btn btn-primary px-8" onClick={login}>Login</button>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

    </div>
  );
};

export default App;
