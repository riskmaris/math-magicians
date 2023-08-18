import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home  |',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator |',
    },
    {
      id: 3,
      path: '/quote',
      text: 'DatingQuotes',
    },
  ];

  return (
    <nav>
      <h2>Math Magicians</h2>
      <ul className="nav-link">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

  );
}

export default Nav;
