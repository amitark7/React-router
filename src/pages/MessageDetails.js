import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import messageJson from "../JsonData/messageJson.json";

const MessageDetails = () => {
  const { state } = useLocation();
  const { messages } = messageJson;
  const { id } = useParams();
  const [messageData, setMessageData] = useState(null);
  useEffect(() => {
    if (state) {
      setMessageData(state.messages);
    } else {
      setMessageData(messages.find((msg) => msg.id === id));
    }
  }, []);

  return (
    <div className="h-screen text-center text-black p-10">
      {messageData ? (
        <>
          <h1 className="text-3xl font-semibold">{messageData.title}</h1>
          <p className="mt-6 text-xl">{messageData.messages}</p>
        </>
      ) : (
        <p className="text-3xl font-semibold">404 Not Found</p>
      )}
    </div>
  );
};

export default MessageDetails;
