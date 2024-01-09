import mongoose, { Schema } from "mongoose"

const memberSchema = new Schema({
    username: String,
    password: String
},{ timestamps:true })

export default {
    member: mongoose.models.Member || mongoose.model("Member", memberSchema)
}
