import { db } from "../sharedValues.js";
import * as wanakana from "wanakana"
//search a word
const getData = (key,value,option) => {
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
const updateSearchedValue=(word)=>{
  return new Promise((resolve,reject)=>db.update({word:word},{$set:{isSearched:true}},(err,doc)=>{
    if(err) return reject({status:false,message:"error"})
      return resolve({status:true,doc})
  }))
}
export const searchWord = async (req,res) => {
  var {word,isSearched}=req.query
  if(wanakana.isRomaji(word)){
    word=wanakana.toHiragana(word)
  }
  await getData("word",word,isSearched)
  .then((result) =>{
    if(result.status) res.json({status:true,result:result.result})
    })
  .catch((err) => res.json({staus:false,message:"Not Found"}));
  if(isSearched==="true"){
    console.log("i run")
    await updateSearchedValue(word).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }
};
export const getSearchedWord=async(req,res)=>{
    await getData("isSearched",true).then((result) =>{
        if(result.status) res.json({status:true,result:result.result})
    })
    .catch((err) => res.json({staus:false,message:"Not Found"}));
}