import { ApexOptions } from "apexcharts";

const chartRateColorVariants = {
  ascending: '#2DD4BF',
  descending: '#EF4444',
  constant: '#EAB308',
};

export const chartOptions = (rate: 'ascending' | 'descending' | 'constant', maxValue: number) => {
  const color = chartRateColorVariants[rate];

  return {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: [color],
      width: 2,   
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    fill: {
      opacity: 0.9,
      type: 'gradient',
      colors: [color],
      gradient: {
        shade: 'dark',
        opacityFrom: 0.4,
        opacityTo: 0,
      },
    },
    xaxis: {
      floating: true,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
    },
    yaxis: {
      floating: true,
      min: 0,
      max: maxValue,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
    },
  } as ApexOptions;
};

export const chartSeries = (data: number[]) => ([
  { name: 'Connections Rate', data },
]);
