import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';

function Drinks({ match }) {
  const history = useHistory();
  const page = history.location.pathname;

  return (
    <div>
      <Header name={ match.path } />
      {
        (page.pathname === '/drinks') && <Drinks />
      }
      <img
        src="/images/searchIcon.svg"
        alt=""
        data-testid="search-top-btn"
      />
    </div>
  );
}

Drinks.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Drinks;
