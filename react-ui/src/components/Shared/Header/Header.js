import React, {Component} from 'react';
import './styles/Header.css';

class Header extends Component {
  render() {
    return (
        <div className="Header text-center">
          <a href="/">
            home </a>
        </div>
    );
  }
}

Header.propTypes = {
  // message: PropTypes.string,
};

Header.defaltProps = {};

export default Header;
