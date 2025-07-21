import axios from "axios";
import React, { useState } from "react";
import JapaneseWordCard from "./JapaneseWordCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [wordInfo, setWordInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchWord = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:3001/search?word=${search}&isSearched=true`);
      setWordInfo(res.data.result[0]);
    } catch (err) {
      console.error("Error searching word:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Janapese word..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchWord}>Search</button>
      </div>

      {/* Result */}
      <div className="result-section">
        {loading && <p>Loading...</p>}
        {wordInfo && <JapaneseWordCard result={[wordInfo]} />}
      </div>
    </div>
  );
};

export default Home;
