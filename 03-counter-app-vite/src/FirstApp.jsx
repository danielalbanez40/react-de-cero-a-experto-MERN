import React from 'react';

const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subtitle}</p>
    </>
  );
};

export default FirstApp;
