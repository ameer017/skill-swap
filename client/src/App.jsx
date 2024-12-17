import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import About from "./components/About";
import Chat from "./components/Chat";
import Bookings from "./components/Bookings";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/bookingd"
          element={
            <Layout>
              <Bookings />
            </Layout>
          }
        />
        <Route
          path="/chat"
          element={
            <Layout>
              <Chat />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

        <Route
          path="/skills"
          element={
            <Layout>
              <Skills />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
