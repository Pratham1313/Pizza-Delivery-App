import React from 'react';
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary  fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand me-auto font-weight-bold" href="/"><b>AniZza's Slices</b></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/About">About</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i className='fas fa-shopping-cart' style={{ fontSize: '48px', color: 'red' }}></i>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hey, User
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/Signup">Sign Up</Link></li>
                    <li><Link className="dropdown-item" href="/Login">Sign In</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign Out</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
