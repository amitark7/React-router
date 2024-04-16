import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { messages } from "../JsonData/messages";

const MessageDetails = () => {
  const { id } = useParams();
  const messageData = messages.find((msg) => msg.id === Number(id));
  return (
    <div className="h-screen text-black p-10">
      <h1 className="text-center text-3xl font-semibold">
        {messageData.title}
      </h1>
      <p className="text-center mt-6 text-xl">{messageData.messages}</p>
    </div>
  );
};

export default MessageDetails;
