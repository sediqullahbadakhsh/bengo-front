import { useGetMostAskedByUserQuery } from "../api/searchApi";
import Skeleton from "../tools/Skeleton";
import { v5 as uuidv5 } from "uuid";

function MostFrequientQueries() {
  const { data, error, isLoading } = useGetMostAskedByUserQuery();
  const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
  const uniqueIds = data?.map((item) => uuidv5(item.query, MY_NAMESPACE));

  if (isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
      <h2 className="block text-gray-700 text-lg font-semibold py-2 px-2">
        Most Frequent Queries
      </h2>
      <div className="py-3 text-sm">
        {data.map((query, index) => (
          <div
            key={uniqueIds[index]}
            className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"
          >
            <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
            <p className="flex-grow font-medium px-2 text-left">
              {query.query}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MostFrequientQueries;
