import { useState, useEffect } from "react";

const DashQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((quotes) => {
        setQuotes(quotes);
        // Set a random index initially
        setIndex(Math.floor(Math.random() * quotes.length));
      });
  }, []);

  useEffect(() => {
    // Set a new random index every 24 hours
    const intervalId = setInterval(() => {
      setIndex(Math.floor(Math.random() * quotes.length));
    }, 86400000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [quotes]);

  return (
    <div className=" m-2">
      {quotes.length > 0 ? (
        <>
          <p className="text-xs font-medium text-center italic">
            &quot;{quotes[index]?.text}&quot;
          </p>
          <p className="mr-5 text-xs font-light text-end italic">
            -{quotes[index]?.author}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DashQuotes;
