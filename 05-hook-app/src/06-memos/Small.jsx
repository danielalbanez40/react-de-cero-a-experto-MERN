import { memo } from "react";
import { PropTypes } from "prop-types";

const Small = memo(({ value }) => {
  console.log("Me volvi a dibujar :(");
  return <small>{value}</small>;
});

Small.propTypes = {
  value: PropTypes.number,
};

Small.displayName = "SmallMemo";

export default Small;
