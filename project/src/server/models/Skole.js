import { Schema, model } from "mongoose";

const Skole = new Schema({
    navn: { type: String, require: true },
    uddannelser: [{ type: Object, ref: "Uddannelse" }],
});

export default model("Skole", Skole);