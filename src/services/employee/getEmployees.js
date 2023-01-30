import PocketBase from "pocketbase";

export default async function getEmployees() {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const employees = await pb.collection("employees").getFullList()
    return employees
}