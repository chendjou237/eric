import PocketBase from "pocketbase";

export default async function createRecord( record) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const newRecord = await pb.collection("tables").create(record)
    console.log(newRecord);
    return newRecord
}