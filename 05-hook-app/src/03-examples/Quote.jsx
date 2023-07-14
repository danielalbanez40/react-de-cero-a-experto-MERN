import { useLayoutEffect, useRef, useState } from "react";

const Quote = ({ quote, author }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ with: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width , height});

  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-4">
          {quote}
        </p>
        <footer className="blockquote-footer" > {author}</footer>
      </blockquote>
      <code style={{display: 'flex'}}>{JSON.stringify(boxSize)}</code>
    </>
  );
};

export default Quote;
