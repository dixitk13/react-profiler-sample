import * as React from "react";
import { Rechart } from "../Recharts";
import { reducer, initState } from "./reducer";

export const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initState);
  return (
    <React.Profiler id="app" onRender={(...props) => console.log(props)}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <input
          type="number"
          value={state?.charts}
          placeholder="enter charts"
          onChange={(e) =>
            dispatch({ type: "UPDATE_CHARTS", charts: e.target.value })
          }
        ></input>
        <input
          type="number"
          value={state?.datapoints}
          placeholder="enter datapoints"
          onChange={(e) =>
            dispatch({ type: "UPDATE_DATAPOINTS", datapoints: e.target.value })
          }
        ></input>
        <input
          type="number"
          value={state?.streams}
          placeholder="enter streams"
          onChange={(e) =>
            dispatch({ type: "UPDATE_STREAMS", streams: e.target.value })
          }
        ></input>
        <hr style={{ margin: "30px 0" }} />

        {Array(Number(state?.charts))
          .fill(0)
          .map((_, idx) => (
            <Rechart
              key={`chart-${idx}`}
              streams={state?.streams}
              datapoints={state?.datapoints}
            />
          ))}
      </div>
    </React.Profiler>
  );
};
