import mongoose, { Document, Schema } from "mongoose";

// Interface
interface IPerson extends Document {
    name: string;
}
// Schema validation
const PersonSchema = new Schema <IPerson>({
    name: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const Person = mongoose.model("Person", PersonSchema); 
