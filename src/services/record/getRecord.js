import PocketBase from "pocketbase"

export default  async function getRecord (departmentId)  {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const table = await pb.collection("tables").getList(1,10,{filter:`department="${departmentId}"`})
    return table
}