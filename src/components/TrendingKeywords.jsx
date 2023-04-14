import { useGetTopKeywordsQuery } from "../api/searchApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function TrendingKeywords({ timeRange, limit = 5 }) {
  const { data, error, isLoading } = useGetTopKeywordsQuery({
    timeRange,
    limit,
  });

  if (isLoading) {
    return (
      <div>
        <h2 className="text-black pb-4 block text-gray-700 text-lg font-semibold py-2 px-2">
          Most Searched Keywords
        </h2>
        <BarChart
          width={700}
          height={300}
          data={data && data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="word" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="text-black pb-4 block text-gray-700 text-lg font-semibold py-2 px-2">
        Most Searched Keywords
      </h2>

      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="word" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default TrendingKeywords;
