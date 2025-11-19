import { BarChart } from '@/assets/charts/bar-chart/bar-chart';

const workloadData = [
  { label: 'Пн', value: 8 },
  { label: 'Вт', value: 6 },
  { label: 'Ср', value: 10 },
  { label: 'Чт', value: 7 },
  { label: 'Пт', value: 9 },
  { label: 'Сб', value: 4 },
  { label: 'Вс', value: 0 },
  { label: 'Пн', value: 8 },
  { label: 'Вт', value: 6 },
  { label: 'Ср', value: 10 },
  { label: 'Чт', value: 7 }
];

export function LoadDynamics() {
    return (
        <BarChart 
            data={workloadData}
            height={15}
            // barColor="var(--color-blue)"
            showValues={true}
            baseFontSize={1}
        />
    );
}