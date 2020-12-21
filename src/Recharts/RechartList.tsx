import * as React from "react";
import { Rechart } from "./Rechart";
interface RechartsListProps {
  streams: any;
  datapoints: any;
}

export const RechartList = ({ streams, datapoints }: RechartsListProps) => {
  return <Rechart streams={streams} datapoints={datapoints} />;
};
