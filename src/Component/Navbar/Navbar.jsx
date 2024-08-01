import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {

  function changeSize() {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) { 
        document.querySelector('.navbar').classList.remove('py-4');
        document.querySelector('.navbar').classList.add('py-2');

      } else {
        document.querySelector('.navbar').classList.remove('py-2');
        document.querySelector('.navbar').classList.add('py-4');
      }
    });
  }

  useEffect(() => {

    changeSize()

  }, [])




  return (





    <>

      <nav className="navbar navbar-expand-lg py-4 fixed-top bg-dark">
        <div className="container">
          < Link className="navbar-brand text-white" to="Home">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link  me-3" aria-current="page" to="About">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="Portfolio">PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="Contact">CONTACT</Link>
              </li>


            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
