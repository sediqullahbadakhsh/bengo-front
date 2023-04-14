import { useGetSearchsInAWeekQuery } from "../api/searchApi";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const SearchesByHourInWeek = () => {
  const { data, isLoading, isError } = useGetSearchsInAWeekQuery();

  if (isLoading) {
    return (
      <div>
        {" "}
        <h2 className="text-black pb-4 block text-gray-700 text-lg font-semibold py-2 px-2">
          Questions asked in a week by hour
        </h2>
        <LineChart
          width={700}
          height={300}
          data={data && data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="8 14" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }

  if (isError) {
    return <p>Error fetching search counts by hour in week.</p>;
  }

  return (
    <div>
      <h2 className="text-black pb-4 block text-gray-700 text-lg font-semibold py-2 px-2">
        Questions asked in a week by hour
      </h2>
      <LineChart
        width={700}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="8 14" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default SearchesByHourInWeek;
