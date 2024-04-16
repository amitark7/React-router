import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Messages from "./Messages";
import MessageDetails from "./MessageDetails";

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
