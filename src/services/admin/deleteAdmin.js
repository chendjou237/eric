import PocketBase from "pocketbase";

export default async function deleteAdmin(id) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const deletedAdmin = await pb.collection("admins").delete(id)
    console.log(deletedAdmin);
    return deletedAdmin
}