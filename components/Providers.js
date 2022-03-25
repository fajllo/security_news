import React from "react";
import Link from "next/link";

export default function Providers() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center overflow-auto">
      <Link href="/darkreading">
        <button
          className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-rose-500 text-black"
          type="submit"
        >
          Dark reading
        </button>
      </Link>
      <Link href="/thehackernews">
        <button
          className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-sky-500 text-black"
          type="submit"
        >
          the hacker news
        </button>
      </Link>
    </div>
  );
}
