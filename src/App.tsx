import { useState } from "react";
import quotes from "./quotes.json";
import TailwindcssButton from "./components/TailwindcssButtons";

function App() {
  const [randomQuote, setRandomQuote] = useState(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  });

  return (
    <div className="flex flex-col h-full justify-around items-center gap-10">
      <div className="flex flex-1 items-end text-center">
        <div>
          <h1 className="text-5xl font-dancingScript my-4">
            {randomQuote.split("-")[0]}
          </h1>
          <p className="text-xl">- {randomQuote.split("-")[1]}</p>
        </div>
      </div>
      <div className="flex-1 mb-auto">
        <TailwindcssButton quotes={quotes} setRandomQuote={setRandomQuote} />
      </div>
    </div>
  );
}

export default App;
