import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ScriptableContext } from 'chart.js';

type Props = {
  monthlyHours: number[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const MonthlyBarChart: FC<Props> = ({
  monthlyHours
}) => {
  const labels = Array.from({ length: monthlyHours?.length }, (_, i) => i + 1);

  const data = {
    labels: labels,
    datasets: [
      {
        label: '',
        data: monthlyHours,
        backgroundColor: (context: ScriptableContext<'bar'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgb(136,199,227)');
          gradient.addColorStop(1, 'rgb(52,113,170)');
          return gradient;
        },
        borderRadius: 20,
        borderSkipped: false,
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number | string, index: number) => {
            return index % 2 === 0 ? `${value}h` : '';
          }
        },
        grid: {
          display: false,
          drawBorder: false,
        }
      },
      x: {
        ticks: {
          callback: (val: number | string) => {
            // 1日から始まるラベルを表示
            const day = Number(val) + 1;
            return day % 2 === 0 ? day : '';
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}
