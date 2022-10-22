import React from "react";
import Entry from "./Entry";
import emojiPedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojiPedia</span>
      </h1>

      <dl className="dictionary">{emojiPedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
