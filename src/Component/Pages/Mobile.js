import React, { useState } from 'react'
import './Home.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom'
import { Form, Alert  } from  'react-bootstrap'


const Mobile = () => {
    const [number,setNmber]=useState("");
    const [error,setError]=useState("");
    const getOtp= (e) =>{
        e.preventDefault();
        console.log(number);
    };
  return (
    <div>
      <div className='p-4 box'>
          {error && <Alert variant="damger">{error}</Alert>}
          <Form onSubmit={getOtp}>
              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  <PhoneInput
                  defaultCountry='PH'
                  value={number}
                  onChange={setNmber}
                  placeholder="Enter Phone Number"/>
              </Form.Group>
              <div className='button-right'>
                  <Link to=''>
                  <button className='btn-secondry mr-5'>Cancle</button></Link>
                
                <button className='btn-primary' type='submit'>Send Otp </button>
              </div>

          </Form>
      </div>
    </div>
  )
}

export default Mobile
