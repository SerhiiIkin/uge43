import { Schema, model } from "mongoose";

const Uddannelse = new Schema({
    navn: { type: String, require: true },
    idskole: { type: String, require: true },
    elever: [{ type: Object, ref: "Elev" }],
    teaser: { type: String, required: true },
    tilbuddet: { type: String, required: true },
    praktikDage: [{ type: String, require: true }],
    tidsrum: { type: String, require: true },
    praktikanter: { type: String, require: true },
    skolelink: { type: String, require: true },
    praktikantpladser: { type: String, require: true },
});

export default model("Uddannelse", Uddannelse);
