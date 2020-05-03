import * as React from "react";
import { render } from "react-dom";
import { parse } from "papaparse";

import "./styles.css";

function App() {
  const [contacts, setContancts] = React.useState<
    { name: string; email: string }[]
  >([]);
  const [heighted, setHighlited] = React.useState(false);

  return (
    <div className="App">
      <div
        className="drag"
        onDragEnter={() => setHighlited(true)}
        onDragLeave={() => setHighlited(false)}
        onDragOver={e => e.preventDefault()}
        onDrop={e => {
          e.preventDefault();
          Array.from(e.dataTransfer.files)
            .filter((file: File) => file.type === "text/csv")
            .forEach(async file => {
              const text = await file.text();
              setContancts(ex => [
                ...ex,
                ...parse(text, { header: true }).data // Include csv headers
              ]);
            });
        }}
        style={{ opacity: heighted ? 0.8 : 1 }}
      >
        Drop here
      </div>
      <div>
        {contacts.map(p => (
          <p key={Math.random()}>
            <b>{p.name}</b>: {p.email}
          </p>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
