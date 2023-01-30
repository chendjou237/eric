import PocketBase from "pocketbase";

export default async function getDepartment( id ) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const department = await pb.collection("departments").getOne(id)
    console.log(department);
    return department
}