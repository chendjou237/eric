import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function AddRecordButton(props) {
  
  return (
    <div className="btn btn-outline btn-accent">
    <Link to="/signup" >Add </Link>
    </div>
  );
}
