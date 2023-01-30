import PocketBase from "pocketbase";
export default async function getDepartments() {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const departments = await pb.collection("departments").getFullList()
    
    return departments;
    }