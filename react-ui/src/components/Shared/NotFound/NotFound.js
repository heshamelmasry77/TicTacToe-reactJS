import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ message }) => (
  <div className="NotFound">
    <p>i am NotFound page</p>
    <p> test message :{message}</p>
  </div>
);

NotFound.defaultProps = {
  message: 'I am sorry it seems that you entered a wrong URL'
};
NotFound.propTypes = {
  message: PropTypes.string.isRequired
};

export default NotFound;
