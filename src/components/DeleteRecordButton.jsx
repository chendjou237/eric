import React, { useState } from "react";
import deleteEmployee from "../services/employee/deleteEmployee";
export default function DeleteRecordButton(props) {
  const { id } = props;
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async (e) => {
    setIsLoading(true);
    await deleteEmployee(id);
    setIsLoading(false);
  };
  return (
    <div>
      <button className="btn btn-outline btn-secondary" onClick={handleDelete}>
        {isLoading ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}
