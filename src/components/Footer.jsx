import { Link } from 'react-router-dom';
import React from 'react';


function Footer() {
    return (
      <footer>
       <ul className="footer-links">
        <li>
          <Link to="/Blue">blue</Link>
        </li>
        <li>
          <Link to="/Red">red</Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
      </ul>
    </footer>
  );
}
  
  export default Footer;