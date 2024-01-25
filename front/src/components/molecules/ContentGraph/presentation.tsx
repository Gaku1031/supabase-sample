import React, { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'

type Props = {
  contentNames: string[];
  totalHours: number[];
}

export const ContentGraph: FC<Props> = ({
  contentNames,
  totalHours
}) => {
  const data = {
    labels: contentNames,
    datasets: [
      {
        label: '# of Hours',
        data: totalHours,
        backgroundColor: [
          'rgb(12,74,226)',
          'rgb(46,112,185)',
          'rgb(85,188,218)',
          'rgb(102,203,248)',
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
    <div className="content-graph">
      <Doughnut data={data} options={options} />
    </div>
  )
}
