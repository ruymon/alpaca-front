import classNames from 'classnames';
import { CategoryCount } from './CategoryCount';

import dynamic from 'next/dynamic';
import { NetworkHelper } from '../helpers/NetworkHelper';
import { chartOptions, chartSeries } from '../helpers/QuickStatsCardHelper';
import { INetworkObject } from '../@types/api';
import { QuickStatsCardSkeleton } from './Skeletons/QuickStatsCardSkeleton';
import { useRegression } from '../hooks/useRegression';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

interface QuickStatsCardProps {
  network: 'ivao' | 'vatsim' | 'poscon';
  observerCount: number;
  data: INetworkObject[];
  maxConnections: number;
};

export function QuickStatsCard({ network, data, maxConnections }: QuickStatsCardProps) {
  const totalConnections = data.map(data => data.total);
  const currentCountByCategory = data[data.length - 1];

  const regression: 'ascending' | 'descending' | 'constant' = useRegression(data);
 
  if (!currentCountByCategory) return <QuickStatsCardSkeleton />;

  const logoContainerClass = classNames(NetworkHelper[network].background, 'w-full h-20 md:h-full md:w-72 p-4 flex items-center justify-center md:rounded-l md:rounded-tr-none rounded-t text-white');

  return (
    <div className="w-full md:h-48 h-auto rounded bg-[#222830] flex flex-col md:flex-row items-center justify-between">
      <div className={logoContainerClass}>
        { NetworkHelper[network].logo }
      </div>

      <div className="flex h-full w-full flex-col justify-between p-6 px-10 gap-10 md:gap-0">
        <div className="w-full md:w-auto">
          <h1 className="text-3xl font-black uppercase">{ network }</h1>
          <span className="text-base text-gray-400">{ NetworkHelper[network].description }</span>
        </div>

        <div className="flex items-center md:gap-10 w-full justify-between md:justify-start md:w-auto">
          <CategoryCount type="pilot" count={currentCountByCategory.pilot} />
          <CategoryCount type="atc" count={currentCountByCategory.atc} />
          <CategoryCount type="observer" count={0} />
        </div>
      </div>

      <div className="h-full md:w-[50%] w-full md:rounded-r bg-[#20262D] md:relative rounded-b">
        <div className="flex items-center justify-between md:justify-start md:items-start md:flex-col md:absolute md:top-5 md:left-5 p-6 px-10 md:p-0 md:px-0">
          <span className="text-white font-bold text-lg">Connections Rate</span>
          <span className="text-gray-500 text-sm font-medium">Last 24 hours</span>
        </div>

        <Chart className="md:absolute md:bottom-0 md:left-0" options={chartOptions(regression, maxConnections)} series={chartSeries(totalConnections)} type="area" height={130} />
      </div>
    </div>
  )
};