// components/JapaneseWordCard.jsx
import React from "react";
import * as wanakana from "wanakana";


const conjugationLabels = {
  plain: "Plain",
  past: "Past",
  negative: "Negative",
  past_negative: "Past Negative",
  polite: "Polite",
  polite_past: "Polite Past",
  polite_negative: "Polite Negative",
  polite_negative_past: "Polite Negative Past",
};

const JapaneseWordCard = ({ result }) => {
  return (
    <div className="word-container">
      {result.map((entry) => (
        <div key={entry._id} className="word-card">
          {/* Header */}
          <div className="word-header">
            <h2 className="word-title">
              {entry.word}{" "}
              <span className="word-romaji">
                ({wanakana.toRomaji(entry.word)})
              </span>
              <span className="word-kanji">【{entry.kanji}】</span>
            </h2>
            <p className="word-meaning">{entry.meaning}</p>
            <p className="word-pos">Part of Speech: {entry.part_of_speech}</p>
          </div>

          {/* Conjugations */}
          {entry.conjugations &&
            Object.keys(entry.conjugations).length > 0 && (
              <div className="conjugation-section">
                <h3 className="section-title">Verb Conjugations</h3>
                <ul className="conjugation-list">
                  {Object.entries(conjugationLabels).map(([key, label]) =>
                    entry.conjugations[key] ? (
                      <li key={key} className="conjugation-item">
                        <span className="conjugation-label">{label}:</span>{" "}
                        <span className="conjugation-value">
                          {entry.conjugations[key]}
                          <span className="romaji-subtle">
                            {" "}
                            ({wanakana.toRomaji(entry.conjugations[key])})
                          </span>
                        </span>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )}

          {/* Examples */}
          <div className="example-section">
            <h3 className="section-title">Example Sentences</h3>
            <ul className="example-list">
              {entry.examples.map((ex, index) => (
                <li key={index} className="example-item">
                  <p className="example-japanese">{ex.japanese}</p>
                  <p className="example-romaji">
                    {wanakana.toRomaji(ex.japanese)}
                  </p>
                  <p className="example-english">{ex.english}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JapaneseWordCard;
