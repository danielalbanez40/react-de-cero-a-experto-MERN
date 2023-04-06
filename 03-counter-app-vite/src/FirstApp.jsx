import React from 'react';

const getResult = (a,b) => {
  return a + b;
}

const FirstApp = () => {
   
  return (
    <>
      <h1>{getResult(4,4)}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <h2>Soy un subtítulo</h2>
    </>
  );
};

export default FirstApp;
