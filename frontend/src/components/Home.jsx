import axios from "axios";
import React from "react";
import { useState } from "react";
import JapaneseWordCard from "./JapaneseWordCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [wordInfo, setWordInfo] = useState(null);
  const [loading,setLoading]=useState(false)
  const searchWord = async () => {
    await axios
      .get(`http://localhost:3001/search?word=${search}`)
      .then((res) =>{
        setWordInfo(res.data.result[0])
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {/* search bar */}
      <div>
        <input
          type="text"
          name="search"
          id=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchWord}>Search</button>
      </div>
      {/* content */}
      <div>
        {wordInfo!=null && <JapaneseWordCard result={[wordInfo]}/>}
      </div>
    </div>
  );
};

export default Home;
