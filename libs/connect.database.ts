import mongoose from "mongoose"

export default async function connect() {
    try {
        await mongoose.connect("mongodb+srv://admin:05478789za@wetoon.s5rnaaj.mongodb.net/wetoon");
        return "Connected to database"
    } catch (e) {
        return "Connection failed"
    }
}
