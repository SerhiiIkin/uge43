import { Schema, model } from "mongoose";

const User = new Schema({
    brugernavn: { type: String, require: true },
    role: { type: string, require:true },
    password: { type: string, require: true },
    token: {type: string, require:true}
});

export default model("User", User);