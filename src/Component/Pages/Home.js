import React,{useState, useEffect} from 'react'
import './Home.css'
import axios from 'axios'
// import {Link} from 'react-router-dom'
const Home = () => {
  
   
  
    
  return (
    <div>
      {/* <div className='row'>
        <div className='col-sm-3'>
        <nav class="navbar navbar-left navbar-light " >
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  {/* <a class="navbar-brand" href="#">Navbar</a> */}

  {/* <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <div className='color'>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link text-white btn btn-sm mt-3" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link  btn btn-sm mt-3" href="#">Offers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  btn btn-sm mt-3 " href="#">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  btn btn-sm mt-3 " href="#" >Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  btn btn-sm mt-3 text" href="#" >About us</a>
      </li>
    </ul>
    </div> */}
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  {/* </div>
</nav>
        </div>
        <div className='col-sm-9'> */} 

       
      <div className="row bg-img">
        <div className=" col-sm-12">
          <center>
            <h1>Book Bus Ticket</h1>
            <br />
            <br />
            <div className="btn1">
              <button type="button" class="btn1 btn-lg mr-2 pl-3 pr-3 ">
                Bus
              </button>
              <button type="button" class="btn1  btn-lg mr-2">
                Train
              </button>
              <button type="button" class="btn1  btn-lg mr-2">
                Hotel
              </button>
            </div>
          </center>
          <br />
          <br />
          <br />
          <form>
            <div class="row">
              <div className="col-sm-1"></div>
              <div class="col">
                <input
                  type="text"
                  class="form-control hme"
                  placeholder="Leaving from"
                 
                />
                
              </div>
              <div class="col-sm-2">
                <input
                  type="text"
                  class="form-control hme"
                  placeholder="Going to"
          
                 
                />
                
              </div>
              <div class="col-sm-2">
                <input
                  type="Date"
                  class="form-control hme"
                  placeholder="Date of Journey"
                />
              </div>
              <div class="col-sm-2">
                <input
                  type="Date"
                  class="form-control hme"
                  placeholder="Date of return journey"
                />
              </div>
              <div class="col-sm-2">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="col-sm-1"></div>
              
            </div>
            
          </form>
          <br />
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="card">
          <h3 className="p-3">Booking Offers</h3>
          <div className="row ">
            <div className="col">
              <img src="/Images/offer1.png" className="img-fluid"></img>
            </div>
            <div className="col">
              {' '}
              <img src="/Images/offer2.png" className="img-fluid"></img>
            </div>
            <div className="col">
              {' '}
              <img src="/Images/offer3.png" className="img-fluid"></img>
            </div>
          </div>
        </div>

        <br />
        <div className="card crd4">
          <div className="row">
            <div className="col-sm-3">
              <div className="card imgfrt m-2">
                <img src="Images/Routes.png"></img>
              </div>
              <div className="card body text-center">
                <h5>100000</h5>
                <p>ROUTES</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card imgfrt m-2">
                <img src="/Images/E-Ticket.png"></img>
              </div>
              <div className="card body text-center">
                <h5>30 SEC</h5>
                <p>INSTANT E-TICKET & REFUND</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card imgfrt m-2">
                <img src="/Images/core.png"></img>
              </div>
              <div className="card body text-center">
                <h5>5 CRORE</h5>
                <p>HAPPY CUSTOMERS</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card imgfrt m-2">
                <img src="/Images/customer.png"></img>
              </div>
              <div className="card body text-center mt-3">
                <h5>24/7</h5>
                <p>CUSTOMER CARE</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="card">
          <div class="card-body ">
            <h4> The Best Way to Book Bus Ticket</h4>
            <p>
              Do you want to know the best way to book tickets online securely
              and how to book tickets in advance? AbhiBus.com is the best online
              platform for bus booking, train tickets booking and hotels
              booking. You can check the amenities provided, compare booking
              fares, check bus timings in the searched route, other facilities
              and more with us. You can find an affordable and cost-effective
              online travel bookings facility at AbhiBus.
            </p>

            <p>
              With AbhiBus, online bus ticket booking is now very easy. You
              simply need to fill in the details of your journey in our search
              bar (departure city, destination city and the date of journey)
              click on the search button to get all the bus operators available
              for booking tickets online. Then, select the bus that best suits
              your travel needs and securely complete your booking online on
              AbhiBus.com.
            </p>

            <p>
              We would recommend that you book your tickets at least 2 - 3 days
              in advance so that you can reserve bus or train seats as per your
              preference and get the best-discounted price on your booking.
            </p>

            <h4>Online Bus Ticket Booking at Lowest Price</h4>
            <p>
              With AbhiBus, travellers can book bus tickets online at the lowest
              ticket fares. Travellers prefer to choose their favorite bus to
              reserve online bus booking. You’re at the right place to find a
              wide range of Private buses and SRTC (State Road Transport
              Corporation) buses are available for bus booking online on
              AbhiBus. You will find below various types of buses available to
              book bus tickets on AbhiBus at lowest fare bus ticket booking:
            </p>
            <div className="row">
              <div className="col">
                <ul>
                  <li>AC Buses</li>
                  <li>Non AC Buses</li>
                  <li>Ordinary Buses</li>
                  <li>Mini Buses</li>
                  <li>Super Luxury (Non-AC Seater)</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Volvo AC Buses</li>
                  <li>Sleeper AC Buses</li>
                  <li>Sleeper Buses</li>
                  <li>Deluxe Buses</li>
                  <li>Sleeper Cum Seater AC</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Double Decker Buses</li>
                  <li>Mercedes buses</li>
                  <li>Non-Mercedes buses</li>
                  <li>Electric Buses</li>
                  <li>Express Buses</li>
                </ul>
              </div>
            </div>
            <p>
              The bus ticket fare depends upon the following factors such as
              distance that you wish to travel, type of bus operator, bus routes
              distance between origin and destination location, amenities
              offered by the bus operator and traveling in festive seasons
              ticket price may vary. Travelling by bus journey is the best
              option, cost effective and the most convenient travel option
              compared to other modes of transport.
            </p>
            <h4>Online Bus Booking Services</h4>
            <p>
              AbhiBus is India’s leading online bus ticket booking service
              provider. Check out our great offers and amazing discount coupons
              to book bus tickets at the lowest price with us. You can check the
              bus schedules, compare prices, and find all the information you
              need to plan an ideal and comfortable bus or train journey.
              AbhiBus has simplified the online bus booking process for your
              travel planning. You can save time and money by using AbhiCash.
              Book now!!! Check all your bus or train route options and use the
              advanced smart filters to accommodate a reliable and comfortable
              journey as per your scheduled travel plan needs.
            </p>
            <h4>Why Choose AbhiBus for Bus Ticket Booking?</h4>
            <p>
              AbhiBus is India’s fastest growing online ticket booking platform
              offering bus ticket booking, train ticket booking and bus rental
              services. AbhiBus is the official ticketing partner of several
              State Road Transport Corporation (SRTC) operators, and you can
              also book tickets for your favourite private travels at discounted
              ticket prices. Travellers can also book IRCTC train tickets
              without any hassle-free services on AbhiBus.
            </p>
            <p>
              AbhiBus has an inventory of over 2,500+ bus service partners
              operating scheduled buses in India. Travellers can easily view
              their bus schedules, compare their ticket prices, and book bus
              tickets online directly through AbhiBus. All these buses currently
              cover more than 100,000 bus routes with reliable transportation in
              India.
            </p>
            <p>
              Travellers can book all types of bus booking, from Non-AC buses to
              Volvo AC buses on AbhiBus.
            </p>
            <ul>
              <li> Free Cancellation </li>
              <li>Safe-T Bus Partners </li>
              <li>Instant Refunds </li>
              <li>Lowest Bus Ticket Price Assured </li>
              <li>Easy and Quick Bus Booking Online </li>
              <li>Exciting Discounts, Cashback & Bus Ticket Booking Offers </li>
              <li>24/7 Customer Assistance </li>
            </ul>
          </div>
        </div>
        <br></br>
        <div className="card seccrd">
          <div className="row">
            <div className="col-sm-7">
              <h5>COVID-19 Related Travel Advisory</h5>
              <p>
                AbhiBus recommends that all passengers follow Covid Safety
                Guidelines. Maintaining strict safety protocols can ensure that
                the virus spread is in control. Travellers must make sure to
                wear double masks, use hand sanitisers and keep their distance
                from others.
              </p>
              <p>
                Look out for our bus services while booking your tickets. These
                bus services are handpicked and they follow all the safety
                protocols - regular bus fumigation, availability of hand
                sanitisers, passenger temperature screening before onboarding,
                staff that is well educated about the safety protocols.
              </p>
              <p>
                Follow our travel updates to know the up to date travel
                guidelines in the country. Refer to State-wise COVID-19 Travel
                Guidelines in India for detailed information.
              </p>
              <p>
                Follow 6 simple steps to protect yourself during bus travel.
              </p>
              <div className="row ">
                <div className="col">
                  <div className="card covidcrd">
                    <img src="/Images/covid2.png"></img>
                    <div className=" text-center">
                      <h6>maintain safe distance</h6>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card covidcrd">
                    <img src="/Images/covid3.png" className="mt-3"></img>
                    <div className=" text-center">
                      <h6 className="mt-3">Wear Mask</h6>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card covidcrd">
                    <img src="/Images/covid4.png" className="mt-2"></img>
                    <div className=" text-center">
                      <h6 className="mt-3">Carry Sanitizer</h6>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card covidcrd">
                    <img src="/Images/covid5.png" className="mt-2"></img>
                    <div className=" text-center">
                      <h6>Carry own Blanket</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <img src="/Images/covid1.png" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
      <br />
   
      </div>
    //   </div>
    // </div>
  )
}

export default Home
