import React from 'react';


export default class NavBar extends React.Component
{
  render(){   
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand text-warning" href="/">
            <i className="fas fa-star"></i>
            {" "}
            The Achiever
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li key="1" className="nav-item">
                  <a className="nav-link active" aria-current='page' href="/">Goals
                  </a>
                </li>
                <li key="2" className="nav-item">
                <a className="nav-link " href="/account">Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    );
  }
}