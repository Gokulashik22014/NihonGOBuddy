import express from "express"
import { searchWord,getSearchedWord } from "../controllers/search.js"
const router=express.Router()

router.route("/search").get(searchWord)
router.route("/getwords").get(getSearchedWord)

export default router