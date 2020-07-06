import React, { useRef } from "react";

const OutputLogger = ({message}) => {
  const messages = useRef([]);
  message && messages.current.push(message);

  return (
    <div>
      {messages.current.map((str, index) => {
        return <p key={index}>{str}</p>;
      })}
    </div>
  );
};

export default OutputLogger;
