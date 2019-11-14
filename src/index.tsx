import * as React from "react";
import { render } from "react-dom";
import produce from "immer";

import "./styles.css";

const numCol = 60;
const numRow = 60;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];

function App() {
  const initialGrid = () => {
    const grid = [];
    for (let i = 0; i < numRow; i++) {
      grid.push(Array.from({ length: numCol }, () => 0));
    }
    return grid;
  };

  const [grid, setGrid] = React.useState(initialGrid());
  const [isStart, setIsStart] = React.useState(false);

  const setRandomGrid = () => {
    const grid = [];
    for (let i = 0; i < numRow; i++) {
      grid.push(
        Array.from({ length: numCol }, () => (Math.random() > 0.2 ? 0 : 1))
      );
    }

    setGrid(grid);
  };

  const running = React.useRef(isStart);
  running.current = isStart;

  const startSimulation = React.useCallback(() => {
    if (!running.current) {
      return;
    }

    setGrid(g =>
      produce(g, draft => {
        for (let i = 0; i < numRow; i++) {
          for (let k = 0; k < numCol; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRow && newK >= 0 && newK < numCol) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              draft[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              draft[i][k] = 1;
            }
          }
        }
      })
    );

    setTimeout(startSimulation, 100);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setIsStart(st => !st);

          if (!isStart) {
            running.current = true;
            startSimulation();
          }
        }}
        className="start"
      >
        {!isStart ? "Start" : "Stop"}
      </button>
      <button onClick={() => setGrid(initialGrid)} className="clear">
        Clear
      </button>
      <button className="random" onClick={setRandomGrid}>
        Random
      </button>
      <div
        className="grid"
        style={{
          gridTemplate: `auto / repeat(${numCol}, 11px)`
        }}
      >
        {grid.map((rows, i) =>
          rows.map((_col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, draft => {
                  draft[i][k] = grid[i][k] ? 0 : 1;
                });

                setGrid(newGrid);
              }}
              className={`grid__cell ${grid[i][k] ? "live" : ""}`}
            />
          ))
        )}
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
