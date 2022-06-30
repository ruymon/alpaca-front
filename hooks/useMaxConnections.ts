import { useEffect, useState } from "react";
import { IApiResponse } from "../@types/api";

export function useMaxConnections(data: IApiResponse[]) {
  const [maxConnections, setMaxConnections] = useState(0);

  useEffect(() => {
    const ivao = Math.max(...data.map(({ ivao }) => ivao.pilot +  ivao.atc));

    const vatsim = Math.max(...data.map(({ vatsim }) => vatsim.pilot +  vatsim.atc));

    const poscon = Math.max(...data.map(({ poscon }) => poscon.pilot +  poscon.atc));
    
    const max = Math.max(ivao, vatsim, poscon);
    
    setMaxConnections(max);
  }, [data]);

  return maxConnections;
};