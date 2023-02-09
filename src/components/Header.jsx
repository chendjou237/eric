import React from "react";
import logo from "../assets/logo-no-background.png";
import { Link, useNavigate } from "react-router-dom";
import PocketBase from "pocketbase";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getDepartments from "../services/department/getDepartments";
import { useState } from "react";
export default function Header() {
  const navigate = useNavigate();
  const pb = new PocketBase("http://127.0.0.1:8090");
  const isAdmin = pb.authStore.model?.collectionName == "admins";
  const isSuperAdmin = pb.authStore.model?.collectionName == "superAdmins";
  var departmentId = "";
  if(!isAdmin || !isSuperAdmin)  departmentId = pb.authStore.model?.department;
  const queryClient = useQueryClient();
  const handleLogout = () => {
    pb.authStore.clear();
    navigate("/login");
  };
  var departments = [];
    const { isError, isSuccess, isLoading, data, error } = useQuery(
      ["departments"],
      getDepartments
    );
    if (isError) {
      return <div>Something went wrong: {error}</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }
    var departmentName
    if (isSuccess) {
      departments = data;
      if (!isAdmin && !isSuperAdmin) {
        
        departmentName = departments.find((department) => department.id === departmentId).name;
      }
    }
  

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src={logo} alt="logo" className="rounded-full w-16" />
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">Home</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {
          isAdmin || isSuperAdmin
          ? <li>
                      <Link to={'/admins'}>admins</Link>
                    </li>
          : null
          }
      
          {isAdmin || isSuperAdmin ? (
            <li tabIndex={0}>
              <a>
                Departments
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                {departments.map((department) => {
                  return (
                    <li key={department.id}>
                      <Link to={`departments/${department.id}`}>
                        {department.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ) : 
            <li>
              <Link to={`/departments/${departmentId}`}>{departmentName }</Link>
          </li>
          }

          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
