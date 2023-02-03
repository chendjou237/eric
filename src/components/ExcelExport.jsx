import React from "react";
import exportToExcel from "../services/excel/exportToExcel";
export default function ExcelExport(props) {
  const { data } = props;

  const handleExport = (e) => {
    e.preventDefault();
    exportToExcel(data, "users");
  };

  return (
    <button onClick={handleExport} className="btn btn-outline btn-primary">
      Export
    </button>
  );
}
