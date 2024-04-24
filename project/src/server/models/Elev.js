import { Schema, model } from "mongoose";

const Elev = new Schema({
    fornavn: { type: String, required: true, unique: true },
    efternavn: { type: String, required: true, unique: true },
    gade: { type: String, required: true, unique: true },
    postnummer: { type: String, require: true },
    by: { type: String, require: true },
    mailadresse: { type: String, require: true },
    telefonnummer: { type: String, require: true },
    idskole: { type: String, require: true },
    iduddannelse: { type: String, require: true },
    status: { type: String, require: true },
});

export default model("Elev", Elev);
