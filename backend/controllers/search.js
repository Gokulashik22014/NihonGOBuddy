import { db } from "../sharedValues.js";

//search a word
const getData = (key,value) => {
  return new Promise((resolve, reject) => {
    db.find({ [key]: value }, (err, doc) => {
      if (err) {
        return reject({ status: false, message: "Database Error", error: err });
      }
      if (!doc) {
        return resolve({ status: false, message: "Not Found" });
      }
      return resolve({ status: true, message: "Found", result: doc });
    });
  });
};
export const searchWord = async (req,res) => {
  const {word}=req.query
  console.log(word)
  await getData("word",word)
    .then((result) =>{
        if(result.status) res.json({status:true,result:result.result})
    })
    .catch((err) => res.json({staus:false,message:"Not Found"}));
};
export const getSearchedWord=async(req,res)=>{
    await getData("isSearched",true).then((result) =>{
        if(result.status) res.json({status:true,result:result.result})
    })
    .catch((err) => res.json({staus:false,message:"Not Found"}));
}