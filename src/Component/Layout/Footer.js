import React,{useState} from 'react'



const Footer = () => {
    const [route,setRoute]= useState(true)
    const [cities,setcities]= useState(false)
    const [rtc,setRtc]= useState(false)
    const [services,setservices]= useState(false)

    const directions=()=>{
        setRoute(true)
        setcities(false)
        setservices(false)
        setRtc(false)
        
    }
    const city=()=>{
        setRoute(false)
        setcities(true)
        setservices(false)
        setRtc(false)
    }
    const rtcs=(e)=>{
        e.preventDefault()
        setRtc(true)
        setcities(false)
        setRoute(false)
        setservices(false)
      
        
    }
    const service=(e)=>{
        e.preventDefault()
        setRtc(false)
        setcities(false)
        setservices(true)
        setRoute(false)
    }
  return (
    <div>
      <footer>
        <div className='bg-muted'>
          <div className='container'>
          <button className='fbtn btn-lg' onClick={directions}>Top Bus Routes</button>
        <button className='fbtn btn-lg' onClick={city}>Buses from Top Cities </button>
         <button className='fbtn btn-lg' onClick={rtcs}>Top RTC Buses</button>
         <button className='fbtn btn-lg' onClick={service}>Top Bus Services</button>
            <hr/>
            {route ? (
            <div className='row'>
              <div className='col-sm-3 Routes' >
                <ul>
                <a href=''  className='top'> <li>Hyderabad to Bangalore Bus</li></a>
                <a href=''  className='top'> <li>Bangalore to Hyderabad Bus</li></a>
                <a href=''  className='top'> <li>Mumbai to Pune Bus</li></a>
                <a href=''  className='top'> <li>Ahmedabad to Jaipur Bus</li></a>
                <a href=''  className='top'> <li>Jaipur to Ahmedabad Bus</li></a>
                <a href=''  className='top'> <li>Indore to Ahmedabad Bus</li></a>

                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li>Hyderabad to Vijayawada Bus</li></a>
                <a href=''  className='top'> <li>Bangalore to Chennai Bus</li></a>
                <a href=''  className='top'> <li>Mumbai to Hyderabad Bus</li></a>
                <a href=''  className='top'> <li>Ahmedabad to Rajkot</li></a>
                <a href=''  className='top'><li>Delhi to Lucknow Bus</li></a>
                <a href=''  className='top'><li>Delhi to Jaipur Bus</li></a>

                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li>Hyderabad to Mumbai Bus</li></a>
                <a href=''  className='top'> <li>Chennai to Bangalore Bus</li></a>
                <a href=''  className='top'> <li>Mumbai to Ahmedabad Bus</li></a>
                <a href=''  className='top'> <li>Ahmedabad to Indore</li></a>
                <a href=''  className='top'><li>Delhi to Gorakhpur Bus</li></a>
                <a href=''  className='top'><li>Vijayawada to Hyderabad Bus</li></a>
                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li>Vijayawada to Bangalore Bus</li></a>
                <a href=''  className='top'> <li>Chennai to Madurai Bus</li></a>
                <a href=''  className='top'> <li>Indore to Bhopal Bus</li></a>
                <a href=''  className='top'> <li>Udaipur to Jaipur</li></a>
                <a href=''  className='top'><li>Delhi to Shimla Bus</li></a>
                <a href=''  className='top'><li>Chennai to Coimbatore Bus</li></a>
                </ul>
              </div>
            </div>
            ) : ( "")}


            {cities? ( 
            <div className='row' id="Cities">
              <div className='col-sm-3' >
                <ul>
                <a href=''  className='top'> <li>Hyderabad Bus Tickets</li></a>
                <a href=''  className='top'> <li>Bellary Bus Tickets</li></a>
                <a href=''  className='top'> <li>Mumbai Bus Tickets</li></a>
                <a href=''  className='top'> <li>Ahmedabad Bus Tickets</li></a>
                <a href=''  className='top'> <li>Gorakhpur Bus Tickets</li></a>
                <a href=''  className='top'> <li>Mangalore Bus Tickets</li></a>

                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li>Vijayawada Bus Tickets</li></a>
                <a href=''  className='top'> <li>Chennai Bus Tickets</li></a>
                <a href=''  className='top'> <li>Pune Bus Tickets</li></a>
                <a href=''  className='top'> <li>Rajkot Bus Tickets</li></a>
                <a href=''  className='top'><li>Lucknow Bus Tickets</li></a>
                <a href=''  className='top'><li>Goa Bus Tickets</li></a>

                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li>Tirupathi Bus Tickets</li></a>
                <a href=''  className='top'> <li>Madurai Bus Tickets</li></a>
                <a href=''  className='top'> <li>Indore Bus Tickets</li></a>
                <a href=''  className='top'> <li>Udaipur Bus Tickets</li></a>
                <a href=''  className='top'><li>Chandigarh Bus Tickets</li></a>
                <a href=''  className='top'><li>Goa Bus Tickets</li></a>
                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li>Bangalore Bus Ticket</li></a>
                <a href=''  className='top'> <li>Coimbatore Bus Tickets</li></a>
                <a href=''  className='top'> <li>Bhopal Bus Tickets</li></a>
                <a href=''  className='top'> <li>Jodhpur Bus Tickets</li></a>
                <a href=''  className='top'><li>Manali Bus Tickets</li></a>
                <a href=''  className='top'><li>Surat Bus Tickets</li></a>
                </ul>
              </div>
            </div>
            ) : ("")}

            {rtc ? (
            <div className='row'>
              <div className='col-sm-3 RTC Buses' >
                <ul>
                <a href=''  className='top'> <li>APSRTC</li></a>
                <a href=''  className='top'> <li>HRTC</li></a>
                <a href=''  className='top'> <li>BSRTC</li></a>
               

                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li>TSRTC</li></a>
                <a href=''  className='top'> <li>TNSTC</li></a>
                <a href=''  className='top'> <li>Kerala RTC</li></a>
            

                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li>GSRTC</li></a>
                <a href=''  className='top'> <li>RSRTC</li></a>
                <a href=''  className='top'> <li>MSRTC</li></a>
               
                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li>OSRTC</li></a>
                <a href=''  className='top'> <li>Kerala RTC</li></a>
                <a href=''  className='top'> <li>UPSRTC</li></a>
                
                </ul>
              </div>
            </div>
                 ) : ("")}

                 {services ? (

            <div className='row'>
              <div className='col-sm-3 Routes' >
                <ul>
                <a href=''  className='top'> <li>Orange Tours and Travels</li></a>
                <a href=''  className='top'> <li>Shrinath Travels</li></a>
                <a href=''  className='top'> <li>Kanker Roadways</li></a>
                <a href=''  className='top'> <li>YBM Travels</li></a>
                <a href=''  className='top'> <li>Dashmesh Travels</li></a>
                <a href=''  className='top'> <li>Patel Tours and Travels</li></a>

                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li>Morning Star Travels</li></a>
                <a href=''  className='top'> <li>Hans Travels</li></a>
                <a href=''  className='top'> <li>VRL Travels</li></a>
                <a href=''  className='top'> <li>Intrcity SmartBus</li></a>
                <a href=''  className='top'><li>Royal Safari</li></a>
                <a href=''  className='top'><li>Dolphin Travels House</li></a>

                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li>Sri Krishna Travels</li></a>
                <a href=''  className='top'> <li>V Kaveri Travels</li></a>
                <a href=''  className='top'> <li>SRS Travels</li></a>
                <a href=''  className='top'> <li>Zing Bus</li></a>
                <a href=''  className='top'><li>Samay Shatabdi</li></a>
                <a href=''  className='top'><li> Swamy Ayyappa Travels</li></a>
                </ul>
              </div>
              <div className='col-sm-3'>
                <ul>
                <a href=''  className='top'> <li> Gujarat Travels</li></a>
                <a href=''  className='top'> <li>Raj Ratan Tours and Travels</li></a>
                <a href=''  className='top'> <li>Greenline Travels</li></a>
                <a href=''  className='top'> <li>M.R Travels</li></a>
                <a href=''  className='top'><li>Kalpana Travels</li></a>
                <a href=''  className='top'><li>CMahalaxmi travels </li></a>
                </ul>
              </div>
            </div>
            ) : ("")}
        </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
