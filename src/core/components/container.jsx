import React from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  return (
    <div className="w-11/12 mx-auto md:container md:mx-auto">{children}</div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: <div></div>,
};

export default Container;
