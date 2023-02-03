import React from "react";
import { useParams } from "react-router-dom";
import { useQueries, useQueryClient } from "@tanstack/react-query";
import getDepartment from "../services/department/getDepartment";
import Spinner from "../components/Spinner";
import ExcelExport from "../components/ExcelExport";
import ExcelImport from "../components/ExcelImport";
import getRecord from "../services/record/getRecord";
import updateRecord from "../services/record/updateRecord";
import EditModal from "../components/Editmodal";

const getDataValue = (data, e) => {
  switch (data) {
    case "field_1":
      return { field_1: e.target.value };

    case "field_2":
      return { field_2: e.target.value };
    case "field_3":
      return { field_3: e.target.value };
    case "field_4":
      return { field_4: e.target.value };
    case "field_5":
      return { field_5: e.target.value };
    case "field_6":
      return { field_6: e.target.value };
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

  console.log("yo");
  const [departmentQuery, tableQuery] = useQueries({
    queries: [
      {
        queryKey: ["department"],
        queryFn: () => getDepartment(id),
      },
      {
        queryKey: ["table"],
        queryFn: () => getRecord(id),
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
  const handleEdit = (id, e, index) => {
    e.preventDefault();
    const field = `field_${index}`;
    const data = getDataValue(field, e);
    console.log(e.target.value + "field " + index);
    updateRecord(id, data);
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold m-8">
          Welcome to the {departmentQuery.data.name} Department
        </h1>
      </div>
      <div className="">
        <div className="overflow-x-auto">
          <div className="flex mb-4 mr-4 justify-end space-x-2">
            <ExcelExport
              data={[...data.items.map((record) => record.export())]}
            />
            <ExcelImport />
          </div>
          <table className="table w-full">
            <thead>
              <tr>
                <th> </th>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item) => {
                // console.log(item);
                const {
                  field_1,
                  field_2,
                  field_3,
                  field_4,
                  field_5,
                  field_6,
                  field_7,
                  field_8,
                  field_9,
                  field_10,
                } = item;

                return (
                  <tr className="hover" key={item.id}>
                    <th>1</th>
                    <td>
                      <input
                        className="bg-transparent focus:border-transparent w-16"
                        placeholder={field_1}
                        onBlur={(e) => handleEdit(item.id, e, 1)}
                      />
                    </td>
                    <td>{field_2}</td>
                    <td>{field_3}</td>
                    <td>{field_4}</td>
                    <td>{field_5}</td>
                    <td>{field_6}</td>
                    <td>{field_7}</td>
                    <td>{field_8}</td>
                    <td>{field_9}</td>
                    <td>{field_10}</td>
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
