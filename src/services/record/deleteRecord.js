import PocketBase from "pocketbase";

export default async function deleteRecord(id) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const deletedRecord = await pb.collection("tables").delete(id)
    console.log(deletedRecord);
    return deletedRecord
}