import { PropTypes } from "prop-types";
import { memo } from "react";

const ShowIncrement = memo(({ increment }) => {

  console.log('Me volvi a generar :(');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Incrementar
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: PropTypes.func,
};

ShowIncrement.displayName = 'ShowIncrementMemo';

export default ShowIncrement;
