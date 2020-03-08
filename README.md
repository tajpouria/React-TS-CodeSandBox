https://kentcdodds.com/blog/stop-using-status-booleans

[index.tsx](./index.tsx)

```ts
import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

enum ActionType {
  success,
  error,
  started,
}

enum StatusType {
  resolved,
  pending,
  rejected,
}

function geoPositionReducer(
  state: {
    status: StatusType;
    position: Position | null;
    error: Error | PositionError | null;
  },
  action: {
    type: ActionType;
    position: Position | null;
    error: Error | PositionError | null;
  },
) {
  switch (action.type) {
    case ActionType.success:
      return {
        ...state,
        status: StatusType.resolved,
        position: action.position,
      };

    case ActionType.error:
      return { ...state, status: StatusType.rejected, error: action.error };

    case ActionType.started:
      return { ...state, status: StatusType.pending };

    default:
      throw new Error(`Unhandled Action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(geoPositionReducer, {
    status: StatusType.pending,
    position: null,
    error: null,
  });

  React.useEffect(() => {
    if (!navigator.geolocation) {
      dispatch({
        type: ActionType.error,
        error: new Error(
          "Device not supports or setup to using geolocation info properly!",
        ),
        position: null,
      });
      return;
    }

    const geoWatch = navigator.geolocation.watchPosition(
      position => dispatch({ type: ActionType.success, position, error: null }),
      error => dispatch({ type: ActionType.error, error, position: null }),
    );

    return () => navigator.geolocation.clearWatch(geoWatch);
  }, []);

  const { status } = state;

  const isPending = status === StatusType.pending;
  const isResolved = status === StatusType.resolved;
  const isRejected = status === StatusType.rejected;

  if (isPending) {
    return <p>Loading your location...</p>;
  }

  if (isResolved && state.position) {
    const { latitude, longitude } = state.position.coords;
    return (
      <p>
        lat: {latitude}, lon: {longitude}
      </p>
    );
  }

  if (isRejected && state.error) {
    return <p>{state.error.message}</p>;
  }

  return <p />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```
