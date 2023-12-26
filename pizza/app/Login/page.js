import React from 'react';

const Page = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="signup-container bg-light p-4 rounded text-center shadow hover">
          <h1 className="signup-title">Sign In</h1>
          <img src="/Images/pizzaeat.webp" className="img-fluid mt-3" alt="..." />
          <div className="signup-content mt-5">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="password" placeholder="Password" />
              <label htmlFor="password">Password</label>
            </div>
            <button type="button" className="btn btn-success btn-lg mt-3">Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
