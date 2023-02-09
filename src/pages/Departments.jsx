import React from "react";
import { useParams } from "react-router-dom";
import { useQueries, useQueryClient } from "@tanstack/react-query";
import getDepartment from "../services/department/getDepartment";
import Spinner from "../components/Spinner";
import ExcelExport from "../components/ExcelExport";
import ExcelImport from "../components/ExcelImport";
import updateEmployee from "../services/employee/updateEmployee";
import AddRecordButton from "../components/AddRecordButton";
import DeleteRecordButton from "../components/DeleteRecordButton";
import getDepartmentEmployees from "../services/employee/getDepartmentEmployee";
import PocketBase from "pocketbase";
const getDataValue = (data, e) => {
  switch (data) {
    case "id":
      return { "id": e.target.value };

    case "username":
      return { username: e.target.value };
    case "full_name":
      return { full_name: e.target.value };
    case "home_address":
      return { home_address: e.target.value };
    case "email":
      return { email: e.target.value };
    case "phone":
      return { phone: e.target.value };
    case "field_7":
      return { field_7: e.target.value };
    case "field_8":
      return { field_8: e.target.value };
    case "field_9":
      return { field_9: e.target.value };
    case "field_10":
      return { field_10: e.target.value };
    default:
      return { field_1: e.target.value };
  }
};

export default function Departments() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const pb = new PocketBase("http://127.0.0.1:8090");
  const isEmployee = pb.authStore.model.collectionName === "employees";
  console.log("yo");
  const [departmentQuery, tableQuery] = useQueries({
    queries: [
      {
        queryKey: ["department"],
        queryFn: () => getDepartment(id),
      },
      {
        queryKey: ["users"],
        queryFn: () => getDepartmentEmployees(id),
      },
    ],
  });
  if (departmentQuery.isLoading || tableQuery.isLoading) {
    return <Spinner />;
  }

  if (departmentQuery.isError || tableQuery.isError) {
    return <div>Something went wrong: {error}</div>;
  }
  const { data } = tableQuery;
  console.log(data);
  const handleEdit = (id, e, field) => {
    e.preventDefault();
    const data = getDataValue(field, e);
    console.log(e.target.value + " " + field);
    updateEmployee(id, data);
  };
  
  return (
    <div className= "h-screen">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold m-8">
          Welcome to the {departmentQuery.data.name} Department
        </h1>
      </div>
      <div className="">
        <div className="overflow-x-auto">
          <div className="flex mb-4 mr-4 justify-end space-x-2">
        {
        !isEmployee
        ? <>    <ExcelExport
                      data={[...data.items.map((record) => record.export())]}
                    />
                    <ExcelImport />
                      <AddRecordButton id={departmentQuery.data.id} />
                    </>
                    
        : null
        }
          
          </div>
          <table className="table w-full">
            <thead>
              <tr>
                <th> </th>
                <th>ID</th>
                <th>username</th>
                <th>Full Name</th>
                <th>Home Address</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Field 7</th>
                <th>Field 8</th>
                <th>Field 9</th>
                <th>Field 10</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item) => {
                // console.log(item);
                const {
                  id,
                  username,
                  full_name,
                  home_address,
                  email,
                  phone,
                  field_7,
                  field_8,
                  field_9,
                  field_10,
                } = item;
                const isNotCurrentEmployee = pb.authStore.model.id !== id || !isEmployee;
                return (
                  <tr className="hover" key={item.id}>
                    <th>1</th>
                    <td>
                      <input disabled={isEmployee}
                        className="bg-transparent focus:border-transparent w-16"
                        placeholder={id}
                        onBlur={(e) => handleEdit(item.id, e, "id")}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="bg-transparent focus:border-transparent w-16"  disabled={isNotCurrentEmployee}
                        placeholder={username}
                        onBlur={(e) => handleEdit(item.id, e, "username")}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="bg-transparent focus:border-transparent w-16" disabled={isNotCurrentEmployee}
                        placeholder={full_name}
                        onBlur={(e) => handleEdit(item.id, e, "full_name")}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="bg-transparent focus:border-transparent w-16" disabled={isNotCurrentEmployee}
                        placeholder={home_address}
                        onBlur={(e) => handleEdit(item.id, e, "home_address")}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="bg-transparent focus:border-transparent w-16" disabled={isNotCurrentEmployee}
                        placeholder={email}
                        onBlur={(e) => handleEdit(item.id, e, "email")}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="bg-transparent focus:border-transparent w-16" disabled={isNotCurrentEmployee}
                        placeholder={phone}
                        onBlur={(e) => handleEdit(item.id, e, "phone")}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="bg-transparent focus:border-transparent w-16" disabled={isNotCurrentEmployee}
                        placeholder={field_7}
                        onBlur={(e) => handleEdit(item.id, e, 7)}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="bg-transparent focus:border-transparent w-16"  disabled={isNotCurrentEmployee}
                        placeholder={field_8}
                        onBlur={(e) => handleEdit(item.id, e, 8)}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="bg-transparent focus:border-transparent w-16" disabled={isNotCurrentEmployee}
                        placeholder={field_9}
                        onBlur={(e) => handleEdit(item.id, e, 9)}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="bg-transparent focus:border-transparent w-16" disabled={isNotCurrentEmployee}
                        placeholder={field_10}
                        onBlur={(e) => handleEdit(item.id, e, 10)}
                      />
                    </td>
                {
                !isNotCurrentEmployee
                ?     <td>
                                      <DeleteRecordButton id={item.id} />{" "}
                                    </td>
                : null
                }
                    <td>
                      {/* <label
                        htmlFor="my-modal"
                        className="btn bg-transparent border border-green-400 hover:bg-green-400 hover:text-white text-green-400"
                      >
                        Edit
                      </label> */}

                      {/* Put this part before </body> tag */}
                      {/* <input
                        type="checkbox"
                        id="my-modal"
                        className="modal-toggle"
                      /> */}
                      {/* <EditModal
                        field_1={field_1}
                        field_2={field_2}
                        field_3={field_3}
                        field_4={field_4}
                        field_5={field_5}
                        field_6={field_6}
                        field_7={field_7}
                        field_8={field_8}
                        field_9={field_9}
                        field_10={field_10}
                      /> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
