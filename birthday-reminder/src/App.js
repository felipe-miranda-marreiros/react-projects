import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    return setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{!people.length && <>No birthdays found</>}</h3>
        {people.length > 0 ? (
          <List people={people} />
        ) : (
          <p>Enter a person's birthday...</p>
        )}
        <button onClick={clearAll}>clear all</button>
      </section>
    </main>
  );
}

export default App;
