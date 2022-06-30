export interface IApiResponse {
  data: Date;
  id: string;
  ivao: {
    atc: number;
    pilot: number;
  };
  vatsim: {
    atc: number;
    pilot: number;
  };
  poscon: {
    atc: number;
    pilot: number;
  };
};

export interface INetworkObject {
  atc: number;
  pilot: number;
  total: number;
}