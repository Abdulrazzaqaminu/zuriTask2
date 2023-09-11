import { Response, Request } from "express";
import { Person } from "../Models/Person";
import mongoose from "mongoose";

export const createPerson = async (req: Request, res: Response) => {
    const { name } = req.body;
    const person = new Person({name: name});
    if(!name) {
        return res.status(400).json({ "Message": "Name field is missing" });
    } else {
        if(typeof name === "string") {
            try {
                const newPerson = await person.save();
                res.status(200).json({"Message": `person ID = ${newPerson?._id}`});
            } catch (error) {
                res.status(400).json({ "Error": error});
            }
        } else {
            res.status(400).json({"Message": "Name is not a string"});
        }
    }
}

export const getPerson = async (req: Request, res: Response) => {
    try {
        const { person_id } = req.params;
        const { name } = req.body;
        if(!name) {
            return res.status(400).json({ "Message": "Name field is missing" });
        } else {
            if (mongoose.Types.ObjectId.isValid(person_id)) {
                const person = await Person.findOne({_id: person_id, name: name}, {name: 1});
                if(person) {
                    res.status(200).json({"Message": person});
                } else {
                    res.status(404).json({"Message": "Person not found"});
                }
            } else {
                res.status(404).json({ "Message": "Invalid person ID" });
            }
        }
    } catch (error) {
        return res.status(400).json(error);
    }
}

export const getPeople = async (req: Request, res: Response) => {
    const { name } = req.body;
    if(name) {
        res.status(404).json({ "Message": "Either remove name or add person ID" });
    } else {
        try {
            const person = await Person.find({}, {name: 1});
            if(person?.length > 0) {
                res.status(200).json({"Message": person});
            } else {
                res.status(404).json({"Message": "No People"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

export const updatePerson = async (req: Request, res: Response) => {
    const { name } = req.body;
    const { person_id } = req.params;
    
    if (!name) {
        return res.status(400).json({ "Message": "Name field is missing" });
    } else {
        if (mongoose.Types.ObjectId.isValid(person_id)) {
            const findPerson = await Person.findOne({ _id: person_id });
            if (findPerson) {
                const oldName = findPerson.name;
                const updatedPerson = await Person.findByIdAndUpdate(person_id,
                    { $set: { name: name } },
                    { new: true });

                if (updatedPerson) {
                    res.status(200).json({ "Message": `Name updated from ${oldName} to ${updatedPerson.name}` })
                }
            } else {
                res.status(404).json({ "Message": "Person not found" });
            }
        } else {
            res.status(404).json({ "Message": "Invalid person ID" });
        }
    }
}

export const deletePerson = async (req: Request, res: Response) => {
    const { person_id } = req.params;
    if (mongoose.Types.ObjectId.isValid(person_id)) {
        const deleteName = await Person.findByIdAndDelete(person_id);
        if(deleteName) {
            res.status(200).json({"Message": "Person removed"});
        } else {
            res.status(404).json({ "Message": "Person not found" });
        }
    } else {
        res.status(404).json({ "Message": "Invalid person ID" });
    }
}
