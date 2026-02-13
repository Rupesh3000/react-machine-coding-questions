import { useRef, useState } from "react";

const AutocompleteSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [countries, setCountries] = useState([]);

  const timerRef = useRef(null);
  const cacheRef = useRef(new Map());

  const callAPI = async (query) => {
    const normalizedQuery = query.trim().toLowerCase();
    const cache = cacheRef.current;

    if (cache.has(normalizedQuery)) {
      console.log("FROM CACHE");
      setCountries(cache.get(normalizedQuery));
      return;
    }
    try {
      const res = await fetch(
        `https://algochurn-server.onrender.com/practice/countries/${query}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      setCountries(data.countries);
    } catch (err) {
      console.error(err);
    }
  };

  const debounceApiCall = (query) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callAPI(query);
    }, 300);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (!value.trim()) {
      setCountries([]);
      return;
    }

    debounceApiCall(value);
  };

  return (
    <div className="mx-auto max-w-xl rounded-lg border border-white/10 bg-black p-6">
      <h1 className="mb-4 text-xl font-semibold text-white">Search Here...</h1>

      <input
        value={searchInput}
        onChange={handleSearch}
        type="text"
        placeholder="Search..."
        className="w-full rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/10"
      />

      {countries.length > 0 && (
        <ul className="mt-2 max-h-96 overflow-y-auto rounded-md border border-white/10 bg-black">
          {countries.map((country) => (
            <li
              key={country}
              className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-white/10"
              onClick={() => setSearchInput(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteSearch;
