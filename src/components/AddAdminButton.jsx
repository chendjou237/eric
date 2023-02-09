import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function AddAdminButton() {
  
  return (
    <div className="btn btn-outline btn-accent">
    <Link to="/admin-signup" >Add </Link>
    </div>
  );
}
