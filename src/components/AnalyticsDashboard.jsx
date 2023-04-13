import MostFrequientQueries from "./MostFrequientQueries";
import TrendingKeywords from "./TrendingKeywords";
import SearchesByHourInWeek from "./SearchesByHourInWeek";

const AnalyticsDashboard = () => {
  return (
    <div className="flex flex-col items-center align-center ">
      <h1 className="pb-10">Bengo Analytics</h1>
      <div className="flex items-start justify-around custom-width">
        <div className="list-anlysis">
          <MostFrequientQueries />
        </div>
        <div className="bar-anlysis">
          <TrendingKeywords limit={15} />
        </div>
      </div>
      <div className="column-anlysis">
        <SearchesByHourInWeek />
      </div>
    </div>
  );
};
export default AnalyticsDashboard;
