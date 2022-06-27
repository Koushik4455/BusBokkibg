import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const Register = () => {
  let navigate = useNavigate()
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    Password: '',
    conform: '',
    mobile: '',
    submit: '',
  })
  const [formErrors, SetFormErros] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const { firstname, lastname, email, Password, conform, mobile, submit } = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const result = await axios.post('http://localhost:4500/user', user)
    console.log(result)
    SetFormErros(validate(user))
    setIsSubmit(true)
    if (email === '' || Password === '') {
      console.log('enter all the fils')
    } else {
      localStorage.setItem('email', JSON.stringify(email))
      localStorage.setItem('Password', JSON.stringify(Password))
      console.user('saved in local storage')
      setUser(!user)
      // setNav(false);
      // posting();
      setUser("");
    }
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user)
      toast.success('Successfully Registerd', {
        position: toast.POSITION.TOP_RIGHT,
      })

      navigate('/Login')
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {}
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const pass = /^[A-Za-z]\w{4,12}$/
    const mobl = /^\(?([6-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/
    if (!values.firstname) {
      errors.firstname = 'firstName is required'
    }
    if (!values.lastname) {
      errors.lastname = 'lastName is required'
    }
    if (!values.mobile) {
      errors.mobile = 'Mobile no is required'
    } else if (!mobl.test(values.mobile)) {
      errors.mobile = 'Enter Curect Number '
    }
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email formate!'
    }
    if (!values.Password) {
      errors.Password = 'Password is required'
    } else if (!pass.test(values.Password.length < 4)) {
      errors.Password = 'Password must more than 4 characters'
    } else if (!pass.test(values.Password.length > 12)) {
      errors.Password = 'Password must be less than 12 characters'
    }
    if (!values.conform) {
      errors.conform = 'Conform Password is required'
    }
    if (Password !== conform) {
      errors.conform = 'Password not Matched'
    } else {
      //  <span></span>
    }
    return errors
  }

  return (
    <div className="reg2">
      <div className="card  reg1">
        <div className="card log">
          <form onSubmit={(e) => onSubmit(e)}>
            <h1 className="log2">Register</h1>
            <div className="card-body">
              <div className="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputtext"
                  aria-describedby="textHelp"
                  placeholder="Enter First Name"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <p className="lerr">{formErrors.firstname}</p>
              <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputtext"
                  aria-describedby="textHelp"
                  placeholder="Enter Last Name"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <p className="lerr">{formErrors.lastname}</p>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <p className="lerr">{formErrors.email}</p>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="Password"
                  value={Password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <p className="lerr">{formErrors.Password}</p>
              <div className="form-group">
                <label for="exampleInputPassword2">Conform Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Conform Password"
                  name="conform"
                  value={conform}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <p className="lerr">{formErrors.conform}</p>

              <div class="form-group">
                <label for="exampleInputPassword1">Mobile no</label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputMobile"
                  placeholder="Enter Mobile No"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <p className="lerr">{formErrors.mobile}</p>

              <br />
              {/* <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <br /> */}

              <button
                type="submit"
                name="submit"
                value={submit}
                className="form-control btn btn-outline-primary blog "
              >
                Submit
              </button>
              <p className="lerr">{formErrors.submit}</p>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
