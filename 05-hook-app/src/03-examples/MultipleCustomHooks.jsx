import useCounter from "../Hooks/useCounter";
import useFetch from "../Hooks/useFetch";
import LoadingQuote from "./LoadingQuote";
import Quote from "./Quote";

const MultipleCustomHooks = () => {
  const { counter, Increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  //   console.log({ data, isLoading, hasError });

  const {quote, author} = !!data && data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author}/>}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => Increment()}
      >
        Next Quote
      </button>
    </>
  );
};

export default MultipleCustomHooks;
