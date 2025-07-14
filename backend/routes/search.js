import express from "express"
import { searchWord } from "../controllers/search.js"
const router=express.Router()

router.route("/search").get(searchWord)

export default router