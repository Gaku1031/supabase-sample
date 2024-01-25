import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  languageNames: string[];
  totalHours: number[];
};

export const LanguageGraph: FC<Props> = ({
  languageNames,
  totalHours,
}) => {
  const data = {
    labels: languageNames,
    datasets: [
      {
        label: '# of Hours',
        data: totalHours,
        backgroundColor: [
          'rgb(12,74,226)',
          'rgb(46,112,185)',
          'rgb(85,188,218)',
          'rgb(102,203,248)',
          'rgb(174,160,236)',
          'rgb(102,80,227)',
          'rgb(65,44,228)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="language-graph">
      <Doughnut data={data} options={options} />
    </div>
  );
}
