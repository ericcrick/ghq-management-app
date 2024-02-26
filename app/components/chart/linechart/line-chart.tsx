import { LineChart } from '@mantine/charts';
import { data } from './data';

export function LineChartReport() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', color: 'indigo.6' }]}
      curveType="linear"
      connectNulls
    />
  );
}