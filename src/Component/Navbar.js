import React from 'react'
import { Link } from 'react-router-dom'
import'./style.css'

const Navbar = () => {
  return (
    <>
     <div className="container-fluid custom-navbar ">
      <div className="row">
        <div className="col-3">
          <Link className="navbar-brand fs-2 fw-bold text-muted" to="/home">STORE</Link>
        </div>
        <div className="col-6">
          <form className="d-flex mt-1" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">Search</button>
          </form>
        </div>
        <div className="col-3 d-flex justify-content-evenly">
            <Link to="./signin.html"><i className="bi bi-box-arrow-in-right fs-3"></i></Link>
            <Link to="./register.html"><i className="bi bi-person-add fs-3"></i></Link>
            <Link to="./cart.html"><i className="bi bi-cart fs-3"></i></Link>
        </div>
      </div>
    </div>

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/products">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="./services.html">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="./cart.html">Cart</Link>
            </li>
         
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar