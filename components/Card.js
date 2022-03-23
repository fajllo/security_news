import React from "react";
import Link from "next/link";

export default function Card(postItem) {
  const { post } = postItem;

  return (
    <div className=" bg-[#161214] shadow-md shadow-[#7CF0BD] my-4 md:mx-4 mx-2">
      <div className="flex p-6 font-mono ">
        <form classNameName="flex-auto pl-6">
          <div classNameName="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
            <h1 className="relative w-full flex-none mb-2  font-semibold ">
              {post.summary}
            </h1>

            <div className="relative uppercase text-teal-400 ml-3">
              {post.latest}
            </div>
          </div>
          <div className="flex items-baseline my-6"></div>
          <div className="flex space-x-2 mb-4 text-sm font-medium">
            <div className="flex space-x-4">
              <Link href={post.link}>
                <button
                  className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
                  type="submit"
                >
                  Read full article
                </button>
              </Link>

              <button
                className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-teal-400 text-white"
                type="button"
              >
                Recomend
              </button>
            </div>
          </div>
          <p className="text-xs leading-6 ">
            by Dark Reading Staff, Dark Reading\n\nMar 21, 2022"
          </p>
        </form>
      </div>
    </div>
  );
}
