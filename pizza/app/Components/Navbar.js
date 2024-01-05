"use client"
import React, { useState } from 'react';
import Link from 'next/link'

const Navbar = () => {
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    window.location.reload();
  }
  return (
    <>
      
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
                  <Link className="nav-link active mx-3" aria-current="page" href="/About">About</Link>
                </li>
                  {(localStorage.getItem("authToken"))? 
                <li className="nav-link active mx-3">cart
                </li>: " "}
                <li className="nav-item dropdown mx-3">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hey, User
                  </a>
                  <ul className="dropdown-menu">
                    {!localStorage.getItem("authToken") ? (
                      <>
                        <li><Link className="dropdown-item" href="/Signup">Sign Up</Link></li>
                        <li><Link className="dropdown-item" href="/Login">Sign In</Link></li>
                      </>
                    ) : (
                      <>
                        <li><a className="dropdown-item" href="#" onClick={handleLogout}>Sign Out</a></li>
                      </>
                    )}
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
