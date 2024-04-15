import React from "react";

const Messages = () => {
  return (
    <div className="bg-blue-400 text-center h-screen text-white p-10">
      <h1 className="text-3xl font-semibold">
        Hey User, I have some messages for you
      </h1>
      <p className="my-6 text-xl">Best Website for lerning React-Routing</p>
      <a
        className="border p-2 rounded-lg bg-transparent border-white outline-none"
        href="https://reactrouter.com/en/main"
      >
        Hey Click Here
      </a>
    </div>
  );
};

export default Messages;
