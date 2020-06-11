import React, { useCallback, useState } from "react";
import Content from "./Content";
import useHnData from "./hooks/useHnData";

export default ({ author, title, url }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{author}</p>
      <button onClick={toggleExpanded}>{expanded ? "Less" : "More"}</button>
      {expanded ? (
        <>
          <Content url={url} />
        </>
      ) : null}
    </div>
  );
};
