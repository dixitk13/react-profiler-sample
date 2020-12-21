import * as React from "react";
import { RechartList } from "../Recharts/RechartList";
import { reducer, initState } from "./reducer";

export const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  // this causes it somehow? two cases try using
  // 1. L12-L16 + L39 (uncomment L40)
  // 2. L40 directly (uncomment step 1 lines)

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
        <input
          type="number"
          value={state?.datapoints}
          placeholder="enter datapoints"
          onChange={(e) =>
            dispatch({ type: "UPDATE_DATAPOINTS", datapoints: e.target.value })
          }
        ></input>
        <hr style={{ margin: "30px 0" }} />
        <MyComponent />
        {/* <RechartList datapoints={state?.datapoints} streams={state?.streams} /> */}
      </div>
    </React.Profiler>
  );
};
