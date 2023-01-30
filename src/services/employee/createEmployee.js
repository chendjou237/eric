import PocketBase from "pocketbase";

export default async function createEmployee({ email, password }) {
    const employee = await PocketBase.create("employees", { email, password });
    return employee;
    }