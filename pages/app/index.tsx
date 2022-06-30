import type { NextPage } from 'next';
import { IApiResponse } from '../../@types/api';
import { Header } from '../../components/Header';
import { QuickStatsCard } from '../../components/QuickStatsCard';
import { useFormatedApiResponse } from '../../hooks/useFormatedApiResponse';
import { useMaxConnections } from '../../hooks/useMaxConnections';

interface LiveActivityProps {
  activityData: IApiResponse[];
};

const LiveActivity : NextPage<LiveActivityProps> = ({ activityData }) => {
  const { ivaoData, vatsimData, posconData } = useFormatedApiResponse(activityData);
  const maxConnections = useMaxConnections(activityData);

  return (
    <>
      <Header />
      <main className="w-full max-w-5xl mx-auto px-4 lg:px-0 mt-4">
        <div>
          <h1 className="text-2xl font-bold">Live Information</h1>
          <span className="text-lg font-normal text-gray-400">Current conections count for all major networks</span>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <QuickStatsCard network="vatsim" observerCount={15} data={vatsimData} maxConnections={maxConnections}/>
          <QuickStatsCard network="ivao" observerCount={39} data={ivaoData} maxConnections={maxConnections}/>
          <QuickStatsCard network="poscon" observerCount={0} data={posconData} maxConnections={maxConnections}/>
        </div>
      </main>
    </>
  )
};

export async function getStaticProps() {
  const apiUrl = 'https://online-activity-nqex2kvhaa-uc.a.run.app/history/24h';

  const res = await fetch(apiUrl)
  const activityData = await res.json()

  return {
    props: {
      activityData,
    },
    revalidate: 15 * 60, // 15 minutes in seconds
  };
};

export default LiveActivity;
