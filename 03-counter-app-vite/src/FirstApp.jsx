import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ title, subtitle='La tierra explota!', name }) => {

  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay Título',
  subtitle: 'No hay subtítulo',
  name: 'Daniel Albanez'
}

export default FirstApp;