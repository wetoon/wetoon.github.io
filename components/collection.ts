import mongoose, { Schema } from "mongoose"

export default const Collection = {
    member: mongoose.model("member", new Schema({
        username: String,
        password: String
    },{ timestamps:true }))
}
