import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import PageLoader from "./components/PageLoader";
import { Toaster } from "react-hot-toast";

export const App = () => {
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);


  if (isCheckingAuth) return <PageLoader />;

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
      <div className=" absolute inset-0 bg-gradient-to-br from-primary/10 via-base-100/20 to-secondary/10 pointer-events-none"></div>

      {/* Top-left blob */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/30 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Bottom-right blob */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/30 blur-[120px] rounded-full pointer-events-none"></div>

      <Routes>
        <Route
          path="/"
          element={authUser ? <ChatPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
      </Routes>


    <Toaster position="top-center" />  
    </div>
  );
};

export default App;
