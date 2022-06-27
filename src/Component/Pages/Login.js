import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Home from './Home'
import './Home.css'

const Login = () => {
  const[data, setData]=useState({
    email:"",
    password:""
  })

  const [home,setHome] = useState(true)
  const [flag,setFlag] = useState(false)
  const {email,password} =data
  const changeHandle =(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const { id } =useParams ()
  useEffect(() =>{
    login ()
  },[])
  const login = async () =>{
    const res= await axios.get(`http://localhost:4500/user/${id}`)
    setData(res.data)
  }
  const submit = (e) => {
    e.preventDefault ()
    axios.put(`http://localhost:4500/user/${id}`)
    let mail = localStorage.getItem('email').replace(/"/g, '')
    let pass = localStorage.getItem('Password').replace(/"/g, '')
    if (!email || !password) {
      setFlag(true)
    } else if (email !== mail || password !== pass) {
      setFlag(true)
    } else {
      setFlag(false)
      setHome(!home)
    }
  }
  return (
    <div>
      {home ? (
      <div className="card log1">
        <div className="card log">
          <form onSubmit={submit}>
            <h1 className="log2">Login</h1>
            <div className="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name='email'
                  value={email}
                  onChange={changeHandle}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name='password'
                  value={password}
                  onChange={changeHandle}
                />
              </div>
              {flag && (
                    <alert className="text-danger">
                      **Please enter valid creditionals**
                    </alert>
                  )}
              {/* <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div> */}
              <br />

              <button
                type="submit"
                class="form-control btn btn-outline-primary blog "
              >
                Submit
              </button>
              <br />
              <hr></hr>
              <Link to="/Register">
                <button
                  type="submit"
                  class="form-control btn btn-outline-success blog "
                >
                  Register
                </button>
              </Link>
              {/* <h4 className='mt-3 text-center'>(Or)</h4> */}
              {/* <Link to="/Mobile">
                <button
                  type="submit"
                  class="form-control btn btn-outline-primary blog  mt-3"
                >
                  Login With Otp
                </button>
              </Link> */}
            </div>
          </form>
        </div>
      </div>
       ) : (
        <Home />
      )}
    </div>
  )
}

export default Login
