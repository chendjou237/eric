import PocketBase from "pocketbase";

export default updateRecord = async (id, record) => {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const updatedRecord = await pb.collection("tables").update(id, record)
    console.log(updatedRecord);
    return updatedRecord
}