import PocketBase from "pocketbase";

export default async function updateAdmin( id, data ) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const updatedAdmin = await pb.collection("admins").update(id, data)    
    console.log(updatedAdmin);
    return updatedAdmin
}