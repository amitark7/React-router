import React from "react";
import { useParams } from "react-router-dom";
import MessageJson from "../JsonData/MessageJson.json";

const MessageDetails = () => {
  const { messages } = MessageJson;
  console.log(messages);
  const { id } = useParams();
  const messageData = messages.find((msg) => msg.id === id);
  return (
    <div className="h-screen text-center text-black p-10">
      {messageData ? (
        <>
          <h1 className="text-3xl font-semibold">{messageData.title}</h1>
          <p className="mt-6 text-xl">{messageData.messages}</p>
        </>
      ) : (
        <p className="text-3xl font-semibold">
          Seems like you are on wrong route.
        </p>
      )}
    </div>
  );
};

export default MessageDetails;
