import React from "react";

export default function Providers() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center overflow-auto">
      <button
        className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-rose-500 text-black"
        type="submit"
      >
        Dark reading
      </button>

      <button
        className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-sky-500 text-black"
        type="submit"
      >
        the hacker news
      </button>
      <button
        className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-purple-500 text-black"
        type="submit"
      >
        Read full article
      </button>
      <button
        className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-emerald-500 text-black"
        type="submit"
      >
        Read full article
      </button>
      <button
        className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-yellow-500 text-black"
        type="submit"
      >
        Read full article
      </button>
    </div>
  );
}
