import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Newsitem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Error from "./Error";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const location = useLocation();
  // console.log(location);
  const { category = "general" } = location.state || {};

  //document.title=`${capitalizeFirstLetter(props.category)}-NewsMonkey`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    let parsedData;
    try {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      parsedData = await data.json();
      if (parsedData.status === "error") {
        parsedData = { articles, totalResults: 8 };
        setError(true);
      }
    } catch (err) {
      parsedData = { articles, totalResults: 8 };
      setError(true);
    }

    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    updateNews();
  }, [category]);

  const fetchMoreData = async () => {
    let parsedData;
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country
        }&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page + 1
        }&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      parsedData = await data.json();
      if (parsedData.status === "error") {
        parsedData = { articles, totalResults: 8 };
        setError(true);
      }
    } catch (err) {
      parsedData = { articles, totalResults: 8 };
      setError(true);
    }

    setPage(page + 1);
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };
  console.log("articles ", articles);
  return (
    <>
      <h1 className="text-center">
        NewsMonkey- Top{capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      {error && <Error />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={!error && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.ProtoTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
