import express from "express"
import { addNewWords, getWordsFromDict } from "../admin/admin.js"

const router=express.Router()

router.route("/getwords").get(getWordsFromDict)
router.route("/putwords").put(addNewWords)

export default router