import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PocketBase from "pocketbase";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getDepartments from "../services/department/getDepartments";

const getId = (item, name) => {
  const id = item.find((item) => item.name === name);
  return id.id;
};

export default function AdminSignup() {
  const navigate = useNavigate();
  
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const [loading, setIsLoading] = useState(false);
  const handleSignUp = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    var record;
    const pb = new PocketBase("http://127.0.0.1:8090");
    const data = {
      email: email.current.value,
      username: username.current.value,
      password: password.current.value,
      "emailVisibility": true,
      passwordConfirm: confirmPassword.current.value,
    };
     try {
      record = await pb.collection("admins").create(data);
      console.log(record.id);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    } finally {
      if (record && record.id) {
        navigate("/login");
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-base-200 flex justify-center">
      <div className="hero min-h-screen  w-1/2">
        <form>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Add An Admin!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
               
               
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    ref={email}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="how should i call you?(at least 3 letters)"
                    className="input input-bordered"
                    ref={username}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password at least be 8 letters"
                    className="input input-bordered"
                    ref={password}
                  />
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="confirm password"
                    className="input input-bordered"
                    ref={confirmPassword}
                  />
                 
                </div>
                
                <div className="form-control mt-6">
                  <button
                    onClick={handleSignUp}
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
