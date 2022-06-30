import { useEffect, useState } from 'react';
import regression from 'regression';

import { INetworkObject } from "../@types/api";

export function useRegression(data: INetworkObject[]) {
  const [rate, setRate] = useState<number>(0);

  useEffect(() => {
    const totalConnections = data.map((data) => data.total);
    const totalConnectionsWithYaxis = Object.entries(totalConnections);

    const formatedTotalConnectionsWithYaxis = totalConnectionsWithYaxis.map(totalConnectionsWithYaxis => [Number(totalConnectionsWithYaxis[1]), Number(totalConnectionsWithYaxis[0])]);
    
    // @ts-ignore
    const result = regression.linear(formatedTotalConnectionsWithYaxis);

    const slicedEquation = result.string.split(' ')[2];
    const slicedEquationWithoutX = slicedEquation.replace('x', '');

    setRate(Number(slicedEquationWithoutX));
  }, [data]);

  switch (true) {
    case rate > 0.5 : 
      return 'ascending'
    case rate < -0.5 :
      return 'descending'
    default :
      return 'constant'
      
  }
};
