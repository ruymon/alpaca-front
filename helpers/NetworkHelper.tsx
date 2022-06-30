import { IvaoLogo } from "../components/IvaoLogo";
import { PosconLogo } from "../components/PosconLogo";
import { VatsimLogo } from "../components/VatsimLogo";

interface INetworkHelper {
  [key: string]: {
    background: string;
    logo: React.ReactNode;
    description: string;
  };
};

export const NetworkHelper: INetworkHelper = {
  ivao: {
    background: 'bg-[#0D2C99]',
    logo: <IvaoLogo />,
    description: 'International Virtual Aviation Organisation',
  },
  vatsim: {
    background: 'bg-gradient-to-b from-[#2483C5] to-[#29B473]',
    logo: <VatsimLogo />,
    description: 'Virtual Air Traffic Simulation Network',
  },
  poscon: {
    background: 'bg-[#221E3B]',
    logo: <PosconLogo />,
    description: 'Positive Control Network'
  },
};
