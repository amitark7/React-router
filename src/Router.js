import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Messages from "./pages/Messages";
import MessageDetails from "./pages/MessageDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="messages" element={<Messages />} />
      <Route path="messages/:id" element={<MessageDetails />} />
    </Routes>
  );
};

export default Router;
