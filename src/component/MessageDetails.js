import React from "react";
import { useLocation } from "react-router-dom";

const MessageDetails = () => {
  const { state } = useLocation();
  return (
    <div className="h-screen text-black p-10">
      <h1 className="text-center text-3xl font-semibold">
        {state.message.title}
      </h1>
      <p className="text-center mt-6 text-xl">{state.message.messages}</p>
    </div>
  );
};

export default MessageDetails;
