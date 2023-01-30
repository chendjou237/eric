import React from 'react'
import logo from '../assets/logo-no-background.png'
import { Link } from 'react-router-dom' 
import PocketBase from 'pocketbase'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [isAdmin, setIsAdmin] = React.useState(false)
  const navigate = useNavigate();
  const handleLogin = async () => {
    setIsLoading(true)

    var authData;
    const pb =  new PocketBase("http://127.0.0.1:8090")
    try {
       authData = await pb.collection(isAdmin?'admins': 'employees').authWithPassword(
    username,
    password,
       )
      console.log(authData);

    } catch (error) {
      console.log(error)
      
      alert(error)
    }

    finally {
      setIsLoading(false)
      if (authData && authData.token) {
        navigate('/')
      }
    }
  }
    return (
        <div className="bg-base-200">
             <div className="flex justify-center">
              <img src={logo } className="w-16" />
          </div>
      <div className="hero min-h-screen ">
          {/* section for site logo */}
         
  <div className="hero-content flex-col lg:flex-row-reverse w-1/2">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="enter your username" className="input input-bordered" onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
                  <input type="password" placeholder="password" className="input input-bordered" onChange={e => setPassword(e.target.value)} />
                  <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Are you an admin? </span> 
    <input type="checkbox" className="toggle" onChange={e=> setIsAdmin(e.target.value)}  />
  </label>
</div>
          <label className="label">
            <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
          <label className="label">
            <Link to="/signup" className="label-text-alt text-purple-700 link link-hover">new? Sign up!</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  </div>
            </div>
            </div>
  )
}
