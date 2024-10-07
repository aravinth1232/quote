import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { IoMdRefresh } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
const Home = () => {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    const response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
    const data = await response.json();
    setQuote(data);
    // const quote = data[0]
  };

  const saveQuote = () => {
    const savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    savedQuotes.push(quote);
    localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));
    toast.success("Quote saved successfully!");
    // alert("Quote saved!");
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="p-4">
      {quote && (
        <div className="border p-4 rounded shadow flex flex-col justify-center items-start gap-5">
          <div>
          <p className="text-lg text-gray-500 font-semibold leading-8">"{quote}"</p>
          </div>

          <div className="self-end flex items-center">
          <button
            onClick={saveQuote}
            className="text-gray-800 px-4 py-2 mt-4 rounded"
          >
            < FaRegBookmark className="w-5 h-5 text-black hover:text-gray-700"/>
          </button>
          <button
            onClick={fetchQuote}
            className="text-gray-800 px-4 py-2 mt-4 rounded"
          >
            <  IoMdRefresh className="w-6 h-6 hover:text-gray-700" />
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;