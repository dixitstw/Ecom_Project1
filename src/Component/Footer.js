import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Footer = () => {
  return (
    
    <>
       <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <i className="bi bi-bootstrap" width="30" height="24"></i>
          </Link>
          <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
        </div>
    
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><Link className="text-muted" to="https://www.facebook.com/"><i className="bi bi-facebook" width="24" height="24"></i></Link></li>
          <li className="ms-3"><Link className="text-muted" to="#"><i className="bi bi-twitter" width="24" height="24"></i></Link></li>
          <li className="ms-3"><Link className="text-muted" to="#"><i className="bi bi-instagram" width="24" height="24"></i></Link></li>
        </ul>
      </footer>
    </div>
    </>
  )
}

export default Footer