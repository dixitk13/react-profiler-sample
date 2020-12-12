import * as React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface RechartProps {
  datapoints: string;
  streams: string;
}

const mydatapoints = (streams: number, count: number) => {
  const start = 1604801288000;
  const end = 1607801288000;
  const interval = (end - start) / count;
  console.log(
    ">> ~ file: Rechart.tsx ~ line 23 ~ mydatapoints ~ interval",
    interval
  );

  return Array(Number(count))
    .fill(0)
    .map((_, idx) => {
      const mystreams = Array(Number(streams))
        .fill(0)
        .reduce(
          (acc, _, sIdx) => ({ ...acc, [getStreamName(sIdx)]: myRnd(0, 40) }),
          {}
        );
      return {
        timestamp: start + interval * idx,
        ...mystreams,
      };
    });
};

export const Rechart = ({ datapoints, streams }: RechartProps) => {
  // const streams = 3;
  const count = Number(datapoints);
  const countStreams = Number(streams);

  const data = React.useMemo(() => mydatapoints(countStreams, count), [
    count,
    countStreams,
  ]);
  console.log(">> ~ file: Rechart.tsx ~ line 49 ~ Rechart ~ data", data);
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          domain={["auto", "auto"]}
          type="number"
          name="Time"
          tickFormatter={(unixTime) => moment(unixTime).format("HH:MM")}
        />

        {Array(Number(streams))
          .fill(0)
          .map((_, idx) => (
            <YAxis
              key={`re-chart-y-${idx}`}
              dataKey={getStreamName(idx)}
              name={getStreamName(idx)}
            />
          ))}

        <Tooltip />
        <Legend />
        {Array(Number(streams))
          .fill(0)
          .map((_, idx) => (
            <Line
              isAnimationActive={false}
              key={`re-chart-line-${idx}`}
              type="monotone"
              dataKey={getStreamName(idx)}
              stroke={getColor(idx)}
            />
          ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

const getStreamName = (idx: number) => `stream-${idx}`;
const colors = ["#8bc34a", "#cddc39", "#ffc107", "#ff5722"];
const getColor = (idx: number) => colors[idx % colors.length];
const myRnd = (min: number, max: number) => Math.random() * (max - min) + min;
