import { getDataRealtedToWord, insertData } from "./utils.js";

export const addNewWords = (req, res) => {
  const { entries } = req.body;
  if (insertData(entries)) {
    res.json({ success: true, message: "Added all the entries" });
  } else {
    res.json({ success: false, message: "Failed to add all the entries" });
  }
};
export const getWordsFromDict = async (req, res) => {
  const { start, end } = req.query;
  await getDataRealtedToWord(start, end)
    .then((result) => res.json({ success: true, words: result }))
    .catch((err) => res.json({ success: false, err }));
};
