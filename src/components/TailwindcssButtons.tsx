"use client";

export default function TailwindcssButton({ setRandomQuote, quotes }) {
  function quoteHandler() {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }
  return (
    <button
      onClick={quoteHandler}
      className="px-8 py-2 my-2 border border-black bg-transparent #141e46  dark:border-white relative group transition duration-200 rounded-lg"
    >
      <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200 rounded-lg" />
      <span className="relative text-lg">Generate</span>
    </button>
  );
}
