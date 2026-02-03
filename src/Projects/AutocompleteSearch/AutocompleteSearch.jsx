import React, { useEffect, useState } from "react";

const AutocompleteSearch = () => {
  return (
    <div className="mx-auto max-w-xl rounded-lg border border-white/10 bg-black p-6">
      <h1 className="mb-4 text-xl font-semibold text-white">Search Here...</h1>
      <div className="mb-4 flex gap-2">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search..."
          className="flex-1 rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/10"
        />
      </div>

      {/* for suggestion div */}
      <div></div>
    </div>
  );
};

export default AutocompleteSearch;
