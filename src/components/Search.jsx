import React, { useState, useEffect } from "react";
import { useSearchQuery, useCreateQueryMutation } from "../api/searchApi";

const Search = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { data, error, isLoading } = useSearchQuery(debouncedQuery, {
    skip: debouncedQuery.trim() === "",
  });
  const [createSearchQuery] = useCreateQueryMutation();

  // perform debouncing on sending to much request at once.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      query &&
      !isLoading &&
      (!data || !data.results || data.results.length === 0)
    ) {
      try {
        await createSearchQuery({ query });
        setQuery("");
      } catch (error) {
        console.error("Error creating search query:", error);
      }
    }
  };

  return (
    <div className="min-w-full w-72 mx-auto">
      <h1 className="pb-6">Bengo</h1>

      <form
        onSubmit={handleSubmit}
        className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
      >
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          className="peer h-full w-full outline-none text-sm text-white-700 pr-2 pl-4"
          type="text"
          name="query"
          value={query}
          placeholder="Search something..."
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoComplete="off"
        />{" "}
        <button type="submit" className="hidden">
          submit
        </button>
      </form>
      {/* ... */}
      {isFocused && (
        <div className="bg-gray-100 absolute rounded-b-md w-72 overflow-hidden transition-all duration-300 min-w-max">
          {" "}
          {data?.data?.map((result) => (
            <div key={result.id}>
              <p className="py-2 px-4 color text-black cursor-pointer text-left bg-white hover:bg-neutral-800 hover:text-white border-b transition-all duration-300 ease-in-out">
                {result.query}
              </p>
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Search;
