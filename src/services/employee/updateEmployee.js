import PocketBase from "pocketbase";

export default async function updateEmployee( id, data ) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const updatedEmployee = await pb.collection("employees").update(id, data)    
    return updatedEmployee
}