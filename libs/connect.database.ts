import mongoose from "mongoose"

export default async function connect() {
    await mongoose.connect("mongodb+srv://admin:05478789za@wetoon.s5rnaaj.mongodb.net/wetoon").then(() => console.log('Connected!'));
}
