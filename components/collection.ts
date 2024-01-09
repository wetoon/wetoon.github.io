import mongoose, { Schema } from "mongoose"

export default {
    member: mongoose.model("member", new Schema({
        username: String,
        password: String
    },{ timestamps:true }))
}
