import PocketBase from "pocketbase";

export default async function getDepartmentEmployees(departmentId) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const employees = await pb.collection("employees").getList(1,100,{filter:`department="${departmentId}"`})
    return employees
}