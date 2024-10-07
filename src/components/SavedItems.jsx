// src/pages/SavedItems.jsx
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const SavedItems = () => {
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    const quotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    setSavedQuotes(quotes);
  }, []);

  const deleteQuote = (index) => {
    const updatedQuotes = savedQuotes.filter((_, i) => i !== index);
    setSavedQuotes(updatedQuotes);
    localStorage.setItem("savedQuotes", JSON.stringify(updatedQuotes));
    toast.success("Quote deleted successfully!");
  };

  return (
    <div className="p-4">
      {savedQuotes.length > 0 ? (
        savedQuotes.map((quote, index) => (
          <div key={index} className="border px-3 py-3  rounded shadow mb-4 grid grid-cols-2 gap-1   ">
            
            <div className="row-start-2 col-start-1 col-end-3  ">
            <p className="text-lg font-semibold">"{quote}"</p>
            </div>
            
            <div className="col-start-1 col-end-3  justify-self-end">
            <button
            onClick={() => deleteQuote(index)}
               className="   text-red-600 hover:text-gray-500 text-2xl px-2 py-1  rounded-full"
            >
             &times;
            </button>
            </div>
          
           
            
          </div>
        ))
      ) : (
        <p>No saved quotes yet.</p>
      )}
    </div>
  );
};

export default SavedItems;
