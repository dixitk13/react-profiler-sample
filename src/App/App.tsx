import * as React from "react";
import { RechartList } from "../Recharts/RechartList";
import { reducer, initState } from "./reducer";

export const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const index = 0;
  const components = [
    <RechartList datapoints={state?.datapoints} streams={state?.streams} />,
  ];
  const MyComponent = () => components[index];
  return (
    <React.Profiler
      id="app"
      onRender={(...args) => console.log(">>: app", args)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* <input
          type="number"
          value={state?.charts}
          placeholder="enter charts"
          onChange={(e) =>
            dispatch({ type: "UPDATE_CHARTS", charts: e.target.value })
          }
        ></input> */}
        <input
          type="number"
          value={state?.datapoints}
          placeholder="enter datapoints"
          onChange={(e) =>
            dispatch({ type: "UPDATE_DATAPOINTS", datapoints: e.target.value })
          }
        ></input>
        {/* <input
          type="number"
          value={state?.streams}
          placeholder="enter streams"
          onChange={(e) =>
            dispatch({ type: "UPDATE_STREAMS", streams: e.target.value })
          }
        ></input> */}
        <hr style={{ margin: "30px 0" }} />

        {/* {Array(Number(state?.charts))
          .fill(0)
          .map((_, idx) => (
            
          ))} */}
        <MyComponent />
      </div>
    </React.Profiler>
  );
};
