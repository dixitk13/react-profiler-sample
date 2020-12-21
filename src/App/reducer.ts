interface ChartState {
  datapoints: string;
  charts: string;
  streams: string;
}
export const initState: ChartState = {
  datapoints: "100",
  streams: "1",
  charts: "1",
};

interface ChartAction {
  [type: string]: string;
}

export const reducer = (state: ChartState, action: ChartAction) => {
  switch (action.type) {
    case "UPDATE_DATAPOINTS":
      return { ...state, datapoints: action.datapoints };
    case "UPDATE_STREAMS":
      return { ...state, streams: action.streams };
    case "UPDATE_CHARTS":
      return { ...state, charts: action.charts };
    default:
      return state;
  }
};
