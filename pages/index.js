import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const callGenerateEndpoint = async () => {
    if (userInput.trim() === "") {
      setApiResponse("");
      setErrorMessage("Please enter a prompt");
      return;
    }
    setErrorMessage("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;

    setApiResponse(`${output.text}`);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Chat with Satoshi Nakamoto</title>
        <meta name="description" content="Chat with Satoshi Nakamoto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="max-w-2xl mx-auto p-2 text-center">
          <h1 className="pt-12 pb-4 text-4xl md:text-5xl">Ask Satoshi</h1>
          <h4 className="text-gray-400">
            Wonder how getting his ideas would be like? Chat with GPT-3 powered
            Satoshi Nakamoto
          </h4>
        </div>

        <div className="max-w-2xl mx-auto p-2 text-center">
          <textarea
            id="message"
            rows="6"
            className="resize-none mt-14 block p-2.5 w-full text-sm bg-zinc-900 text-white rounded-lg border outline-none border-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Would you join the Ethereum Foundation if you were assured no one will know that you are actually Satoshi?"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <div className="flex flex-col mt-4 space-y-3">
            <button
              className="w-28 h-9 self-end text-sm bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors hover:cursor-pointer"
              onClick={callGenerateEndpoint}
            >
              {!loading ? (
                "Generate"
              ) : (
                <div className="animate-pulse flex justify-center">
                  <span class="self-center h-3 w-3 bg-purple-100 rounded-full"></span>
                </div>
              )}
            </button>
            <p className="text-center text-sm italic text-purple-500">
              {errorMessage}
            </p>
            <div className="text-sm mt-20 max-w-2xl mx-auto p-2 leading-7">
              {apiResponse}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
