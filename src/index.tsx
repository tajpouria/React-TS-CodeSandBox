import * as React from "react";
import { render } from "react-dom";
import { graphql } from "@gqless/react";
import { query } from "./graphql";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Sorry we are slow...</div>}>
        <Launches />
      </React.Suspense>
    </div>
  );
}

const Launches = graphql(() => {
  return (
    <>
      {query.launchesPast({ limit: 10 }).map(launch => (
        <div key={launch.id}>
          <div>{launch.mission_name}</div>
        </div>
      ))}
      <ul>
        {query.ships({ limit: 10 }).map(ship => (
          <li
            key={ship.id}
            onClick={() => {
              //@ts-ignore
              ship.clicked();
            }}
          >
            <p>{ship.name}</p>
            {ship.image ? <img src={ship.image} alt={ship.name} /> : null}
          </li>
        ))}
      </ul>
    </>
  );
});

const rootElement = document.getElementById("root");
render(<App />, rootElement);
