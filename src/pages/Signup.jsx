import React from 'react'
import { Link } from 'react-router-dom'
import PocketBase from 'pocketbase'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
   const navigate = useNavigate();
  const [fname, setFName] = React.useState("")
  const [homeAddress, setHomeAddress] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const handleSignUp = async() => {
    setIsLoading(true)
    console.log(fname, homeAddress, phone, email, username, password, confirmPassword);
    var record;
    const pb = new PocketBase('http://127.0.0.1:8090')
    const data = {
      "fname": fname,
      "homeAddress": homeAddress,
      "phone": phone,
      "email": email,
      "username": username,
      "password": password,
      "passwordConfirm": confirmPassword
    }
    try {
       record = await pb.collection("employees").create(data)
      console.log(record.id);
      
    } catch (error) {
      isLoading(false)
      alert(error)

    }
    finally {
      if (record && record.id) {
      navigate('/login')

      }
      setIsLoading(false)
    }

  }
  return (
    <div className="bg-base-200 flex justify-center">
      <div className="hero min-h-screen  w-1/2">
        <form >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" onChange={e => setFName(e.target.value)} placeholder="don't lie" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Home Address</span>
          </label>
          <input type="text" placeholder="where do you live?" onChange={e=> setHomeAddress(e.target.value)}  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone number</span>
          </label>
          <input  type="tel" placeholder="give me your phone number😘" onChange={e=> setPhone(e.target.value)}  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" onChange={e=> setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="how should i call you?(at least 3 letters)" className="input input-bordered" onChange={e=> setUsername(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password at least be 8 letters" className="input input-bordered" onChange={e=> setPassword(e.target.value)}  />
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="text" placeholder="confirm password" className="input input-bordered" onChange={e=> setConfirmPassword(e.target.value)}  />
          <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">already have account¿ log in then</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleSignUp} className="btn btn-primary"  disabled ={isLoading} >Sign Up</button>
        </div>
      </div>
    </div>
          </div>
          </form>
</div>
    </div>
  )
}
