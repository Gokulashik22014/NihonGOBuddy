import axios from "axios";
import React, { useEffect, useState, useTransition } from "react";
import DropDownWord from "./DropDownWord";

const Bookmark = () => {
  const [searchedWords, setSearchedWords] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  const [filteredWords, setFilteredWords] = useState([]);
  const [flag, setFlag] = useState(false); // optional

  useEffect(() => {
    const loadWords = async () => {
      startTransition(async () => {
        try {
          const res = await axios.get("http://localhost:3001/getwords");
          setSearchedWords(res.data.result);
          setFilteredWords(res.data.result);
        } catch (err) {
          console.error("Error loading words:", err);
        }
      });
    };
    loadWords();
  }, []);

  const handleSearch = () => {
    const searchTerm = search.trim().toLowerCase();
    setFlag(true); // optional
    if (searchTerm === "") {
      setFilteredWords(searchedWords);
    } else {
      const filtered = searchedWords.filter((entry) =>
        entry.word.toLowerCase().includes(searchTerm)
      );
      setFilteredWords(filtered);
    }
  };

  const clearSearch = () => {
    setSearch("");
    setFilteredWords(searchedWords);
    setFlag(false); // optional
  };

  return (
    <div className="bookmark-container">
      <div className="search-bar-wrapper">
        <div className="search-bar-b">
          <input
            type="text"
            value={search}
            placeholder="Find word..."
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length > 0 && (
            <button className="cancel-button" onClick={clearSearch}>
              ×
            </button>
          )}
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="bookmark-list">
        {filteredWords.length > 0 ? (
          filteredWords.map((word, idx) => (
            <DropDownWord key={idx} wordEntry={word} />
          ))
        ) : (
          <p>No matching words found.</p>
        )}
      </div>
    </div>
  );
};

export default Bookmark;
