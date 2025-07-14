import fs from "fs";
import { parseStringPromise } from "xml2js";
import { db } from "../sharedValues.js";

//get the words list from the JMdict-> id(auto), word, meaning, kanji, adj or verb
export const getDataRealtedToWord = async (start, limit) => {
  let xml = fs.readFileSync("./source/JMdict_e", "utf8"); // No extension, no problem!

  // Step 2: Parse it
  xml = xml.replace(/&([a-z0-9\-]+);/gi, (match, entity) => {
    return entity; // OR return ''; if you want to remove it
  });
  const result = await parseStringPromise(xml);

  // Step 3: Access entries (adjust based on root tag like <JMdict>)
  console.log(result.JMdict.entry.length)
  const entries = result.JMdict.entry.slice(start, limit); // limit to 50

  // Step 4: Extract data
  entries.forEach((entry, index) => {
    const rebs = entry.r_ele?.flatMap((r) => r.reb) || [];
    const glosses = entry.sense?.flatMap((s) => s.gloss) || [];

    console.log(`#${index + 1}`);
    console.log("Readings:", rebs);
    // console.log(
    //   "Glosses:",
    //   glosses.map((g) => g._ || g)
    // ); // Sometimes gloss has "_"
    console.log("----");
  });
};

export const insertData = (entries) => {
 entries.map((entry)=>{
  const value = Object.values(entry).map(item => ({
  ...item,
  isSearched: false
}));
    db.insert(value, (err, newDoc) => {
      if (err) return console.error("❌ Insert failed:", err);
      console.log("✅ Inserted:", newDoc);
    });
    // console.log(entry)
  })
};

const findAll = () => {
  db.find({}, (err, docs) => {
    if (err) {
      console.error("❌ Error fetching entries:", err);
      return;
    }
    console.log("📦 All Entries:", docs);
  });
};
