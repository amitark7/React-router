import React from "react";

const About = () => {
  return (
    <div className="bg-green-800 text-center h-screen text-white p-10">
      <h1 className="text-3xl font-semibold">Hey This is About Section</h1>
      <p className="my-6 text-xl">You want to know about our company</p>
      <a
        className="border p-2 rounded-lg bg-blue-500 outline-none border-none"
        href="https://www.innotechteam.in/"
      >
        Visit Here
      </a>
    </div>
  );
};

export default About;
