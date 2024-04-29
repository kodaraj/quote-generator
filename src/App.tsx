"use client";
import { useState } from "react";
import quotes from "./quotes.json";
import TailwindcssButton from "./components/TailwindcssButtons";
import { TextGenerateEffect } from "./components/TextGenerateEffect";
// import { TextGenerateEffectDemo } from "./components/TextGenerateEffectDemo";

function App() {
  const [randomQuote, setRandomQuote] = useState(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  });
  console.log(randomQuote);
  return (
    <div className="flex flex-col h-full justify-around items-center gap-12">
      <div className="flex flex-1 items-end text-center">
        <div>
          <h1 className="text-4xl font-dancingScript my-0">
            <TextGenerateEffect words={randomQuote} />
          </h1>
        </div>
      </div>
      <div className="flex-1 mb-auto">
        <TailwindcssButton quotes={quotes} setRandomQuote={setRandomQuote} />
      </div>
    </div>
  );
}

export default App;
