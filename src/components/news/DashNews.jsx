import { useEffect, useState } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { HiArrowUturnLeft } from "react-icons/hi2";

const DashNews = () => {
  const [news, setNews] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = () => {
      fetch("https://ok.surf/api/v1/cors/news-feed")
        .then((response) => response.json())
        .then((data) => setNews(data));
    };

    fetchNews();

    const interval = setInterval(() => {
      fetchNews();
    }, 600000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (news && news.Technology && news.Technology.length > 0) {
      const delay = 6000;

      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === news.Technology.length - 1 ? 0 : prevIndex + 1
        );
      }, delay);

      return () => clearInterval(interval);
    }
  }, [news]);

  return (
    <div className="p-2 ">
      <div className="flex justify-between">
        <h1 className="text-sm font-semibold text-pretty mb-2">News</h1>
        <button
          className="mr-2"
          onClick={() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? news.Technology.length - 1 : prevIndex - 1
            );
          }}
        >
          <HiArrowUturnLeft size={18} />
        </button>
      </div>
      {news ? (
        <div className="text-sm">
          <div className="flex items-center gap-2 mb-2">
            <img
              className="size-5"
              src={news.Technology[currentIndex].source_icon}
              alt="Source img"
            />
            <h2 className="text-xs font-medium">
              {news.Technology[currentIndex].source}
            </h2>
          </div>
          <h2 className="first-letter:ml-2 text-pretty">
            {news.Technology[currentIndex].title}...
          </h2>
          <a
            href={news.Technology[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-xs items-center gap-1 mt-2 text-gray-700 "
          >
            Read more
            <HiArrowTopRightOnSquare size={14} />
          </a>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default DashNews;
