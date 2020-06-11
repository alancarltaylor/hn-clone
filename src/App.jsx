import React, { useState } from "react";
import "./App.css";
import useHnData from "./hooks/useHnData";
import Search from "./Search";
import Article from "./Article";

const baseUrl = "http://hn.algolia.com/api/v1/";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = useHnData(`${baseUrl}search?query=${searchTerm}`);
  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="container">
      <header>
        <h1>Showing {data ? data.length : null} articles for redux</h1>
      </header>
      <section>
        <Search onSubmit={handleSearch} />
      </section>
      <section className="articles">
        {data
          ? data.map((datum) => (
              <Article
                key={Math.random()}
                title={datum.title}
                author={datum.author}
                url={datum.url}
              />
            ))
          : null}
      </section>
    </div>
  );
}

export default App;
