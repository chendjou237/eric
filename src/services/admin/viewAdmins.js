import PocketBase from "pocketbase";

export default async function getAdmins() {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const admins = await pb.collection("admins").getFullList()
    return admins
}