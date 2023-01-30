import PocketBase from "pocketbase";

export default async function deleteEmployee(id) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const deletedEmployee = await pb.collection("employees").delete(id)
    console.log(deletedEmployee);
    return deletedEmployee
}