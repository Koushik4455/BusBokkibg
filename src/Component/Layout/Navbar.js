import React from 'react'


const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-secondary text-white">
          <a class="navbar-brand text-danger" href="/">
            Booking
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ml-auto" style={{ padding: '10px' }}>
              <li class="nav-item active" style={{ paddingRight: '30px' }}>
                <a class="nav-link" href="/Offer">
                  Offers
                </a>
              </li>

              <li
                class="nav-item active dropdown"
                style={{ paddingRight: '30px' }}
              >
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Bookings
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Print Ticket
                  </a>
                  <a class="dropdown-item" href="#">
                    Cancle Ticket
                  </a>
                </div>
              </li>
              <li class="nav-item active" style={{ paddingRight: '200px' }}>
                <a class="nav-link " href="/login">
                  Login/Register
                </a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
