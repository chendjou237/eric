import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getDepartment from "../services/department/getDepartment";
import Spinner from "../components/Spinner";
import ExcelExport from "../components/ExcelExport";
export default function Departments() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  console.log("yo");
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    ["department"],
    () => getDepartment(id)
  );
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Something went wrong: {error}</div>;
  }
  const excelData = [
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Sara",
      age: 25,
    },
    {
      id: 3,
      name: "Bob",
      age: 30,
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold m-8">
          Welcome to the {data.name} Department
        </h1>
        <ExcelExport fileName={"Excel Export"} excelData={excelData} />
      </div>

      <div className="">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Field 1</th>
                <th>Field 2</th>
                <th>Field 3</th>
                <th>Field 4</th>
                <th>Field 5</th>
                <th>Field 6</th>
                <th>Field 7</th>
                <th>Field 8</th>
                <th>Field 9</th>
                <th>Field 10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
              </tr>
              <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
