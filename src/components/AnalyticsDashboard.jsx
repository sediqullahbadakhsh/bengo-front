import MostFrequientQueries from "./MostFrequientQueries";
import TrendingKeywords from "./TrendingKeywords";
import SearchesByHourInWeek from "./SearchesByHourInWeek";

const AnalyticsDashboard = () => {
  return (
    <div className="flex flex-col items-center align-center ">
      <h1 className="pb-10">Bengo Analytics</h1>
      <div className="flex items-start justify-around custom-width pb-12">
        <div className="column-anlysis bg-white shadow-md rounded-lg px-3 py-2 mb-4">
          <SearchesByHourInWeek />
        </div>
        <div className="bar-anlysis bg-white shadow-md rounded-lg px-3 py-2 mb-4">
          <TrendingKeywords limit={15} timeRange="week" />
        </div>
      </div>
      <div className="list-anlysis">
        <MostFrequientQueries />
      </div>
    </div>
  );
};
export default AnalyticsDashboard;
