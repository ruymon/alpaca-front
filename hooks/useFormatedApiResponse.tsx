import { useEffect, useState } from "react";
import { IApiResponse, INetworkObject } from "../@types/api";

export function useFormatedApiResponse(rawApiData: IApiResponse[]) {
  const [ivaoData, setIvaoData] = useState<INetworkObject[]>([]);
  const [vatsimData, setVatsimData] = useState<INetworkObject[]>([]);
  const [posconData, setPosconData] = useState<INetworkObject[]>([]);

  useEffect(() => {
    setIvaoData(rawApiData.map((log) => ({
      ...log.ivao, 
      total: log.ivao.atc + log.ivao.pilot,
    })));
  
    setVatsimData(rawApiData.map((log) => ({
      ...log.vatsim, 
      total: log.vatsim.atc + log.vatsim.pilot,
    })));
  
    setPosconData(rawApiData.map((log) => ({
      ...log.poscon, 
      total: log.poscon.atc + log.poscon.pilot,
    })));
  }, [rawApiData]);

  return { ivaoData, vatsimData, posconData };
}