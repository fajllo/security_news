import React from "react";
import Link from "next/link";

export default function Providers() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center overflow-auto">
      <Link href="/thehackernews">
        <button
          className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-sky-500 text-black"
          type="submit"
        >
          The Hacker News
        </button>
      </Link>
      <Link href="/latesthackingnews">
        <button
          className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-[#eff1f3] text-black"
          type="submit"
        >
          Latest Hacking News
        </button>
      </Link>
      <Link href="/darkreading">
        <button
          className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-rose-500 text-black"
          type="submit"
        >
          Dark Reading
        </button>
      </Link>
    </div>
  );
}
