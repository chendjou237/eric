import React, { useState } from "react";
import deleteAdmin from "../services/admin/deleteAdmin";
export default function DeleteAdminButton(props) {
  const { id } = props;
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async (e) => {
    setIsLoading(true);
    await deleteAdmin(id);
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
