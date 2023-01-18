import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60px',
      }}
    >
      <Link to="/hello">1</Link>
      <Link to="/world">2</Link>
      <Link to="/counters">Counters</Link>
    </nav>
  );
};
