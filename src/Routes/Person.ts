import express from "express";
import { createPerson, deletePerson, getPeople, getPerson, updatePerson } from "../Controllers/Person";

const router = express.Router();

router.get("/:person_id", getPerson);
router.get("/", getPeople)
router.post("/", createPerson);
router.put("/:person_id", updatePerson);
router.delete("/:person_id", deletePerson);

export default router;