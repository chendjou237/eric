import React from 'react'
import ExcelExport from "../components/ExcelExport";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getAdmins from "../services/admin/viewAdmins";
import Spinner from "../components/Spinner";
import AddAdminButton from '../components/AddAdminButton';
import DeleteAdminButton from '../components/DeleteAdminButton';
import updateAdmin from '../services/admin/updateAdmin';
import PocketBase from "pocketbase";

const getDataValue = (data, e) => {
  switch (data) {
    case "id":
      return { "id": e.target.value };

    case "username":
      return { username: e.target.value };
  
    case "email":
      return { email: e.target.value };
    
    default:
      return { id: e.target.value };
  }
};


export default function Admins() {
    const pb = new PocketBase("http://127.0.0.1:8090");
  const isSuperAdmin = pb.authStore.model.collectionName === "superAdmins";
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(["admins"], getAdmins);
  if (isLoading) {
    return <Spinner />;
  }
  const handleEdit = (id, e, field) => {
    e.preventDefault();
    const data = getDataValue(field, e);
    console.log(e.target.value + " " + field);
    updateAdmin(id, data);
  };
  
  return (
    <div className='h-screen'>
      <h1 className='text-2xl font-extrabold'>List Of Admins</h1>
  <div className="">
        <div className="overflow-x-auto">
        {
        isSuperAdmin
        ?   <div className="flex mb-4 mr-4 justify-end space-x-2">
                    <ExcelExport
                      data={[...data.map((record) => record.export())]}
                    />
                    {/* <ExcelImport /> */}
                    <AddAdminButton  />
                  </div>
        : null
        }
          <table className="table w-full">
            <thead>
              <tr>
                <th> </th>
                <th>ID</th>
                <th>username</th>
               
                <th>Email</th>
             
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                // console.log(item);
                const isCurrentAdmin = pb.authStore.model.id === item.id || isSuperAdmin;
                
                const {
                  id,
                  username,
                  email,
            
                } = item;

                return (
                  <tr className="hover" key={item.id}>
                    <th>1</th>
                    <td>
                      <input
                        className="bg-transparent focus:border-transparent w-16" disabled={!isCurrentAdmin}
                        placeholder={id}
                        onBlur={(e) => handleEdit(item.id, e, "id")}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="bg-transparent focus:border-transparent w-16" disabled={!isCurrentAdmin}
                        placeholder={username}
                        onBlur={(e) => handleEdit(item.id, e, "username")}
                      />
                    </td>
                  
                   
                    <td>
                      {" "}
                      <input
                        className="bg-transparent focus:border-transparent w-16" disabled={!isCurrentAdmin}
                        placeholder={email}
                        onBlur={(e) => handleEdit(item.id, e, "email")}
                      />
                    </td>
                 
               
                  
               
                 {
                 isCurrentAdmin
                 ?    <td>
                                       <DeleteAdminButton id={item.id} />{" "}
                                     </td>
                 : null
                 }
                    <td>
                   
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
