import PocketBase from "pocketbase";

export default async function createEmployee(data) {
 
    const pb = new PocketBase("http://127.0.0.1:8090");
    console.log(data);
    const employee = await pb.collection("employees").create(data);
    return employee;
    }