import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Card(postItem) {
  const { post } = postItem;
  const notify = e => {
    toast.success("Coppied to clipboard", {
      style: { backgroundColor: "#02c39a" },
    });

    navigator.clipboard.writeText(post.link);
  };
  return (
    <div
      className=" bg-[#161214] shadow-md shadow-[#7CF0BD] my-4 md:mx-4 mx-2"
      id={post.id}
    >
      <div className="flex p-6 font-mono ">
        <form className="flex-auto pl-6">
          <div className="relative flex flex-wrap items-baseline pb-6  before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
            <h1 className="relative w-full flex-none mb-2  font-semibold ">
              {post.summary}
            </h1>

            <div className="relative uppercase text-teal-400 ml-3">
              <p>{post.latest}</p>
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
              {/* remomend option doesnt work for now */}
              <button
                className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-teal-400 text-white"
                type="button"
                onClick={notify}
              >
                Copy link to full article
              </button>
            </div>
          </div>
          <p className="text-xs leading-6 ">{post.author}</p>
        </form>
      </div>
    </div>
  );
}
