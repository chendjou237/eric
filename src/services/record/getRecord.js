import PocketBase from "pocketbase"

export default getTable = async (departmentId) => {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const table = await pb.collection("tables").getList({ "department": departmentId })
    return table
}