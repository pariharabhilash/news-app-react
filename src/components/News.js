import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Newsitem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Error from "./Error";

const News = (props) => {
  const data = [
    {
      "source": {
        "id": null,
        "name": "Phys.Org"
      },
      "author": "Science X",
      "title": "Record-breaking detection of radio signal from atomic hydrogen in extremely distant galaxy - Phys.org",
      "description": "Astronomers from McGill University in Canada and the Indian Institute of Science (IISc) in Bengaluru have used data from the Giant Meterwave Radio Telescope (GMRT) in Pune to detect a radio signal originating from atomic hydrogen in an extremely distant galax…",
      "url": "https://phys.org/news/2023-01-record-breaking-radio-atomic-hydrogen-extremely.html",
      "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/record-breaking-detect.jpg",
      "publishedAt": "2023-01-16T15:48:03Z",
      "content": "Astronomers from McGill University in Canada and the Indian Institute of Science (IISc) in Bengaluru have used data from the Giant Meterwave Radio Telescope (GMRT) in Pune to detect a radio signal or… [+4290 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "\"Pegasus, Rafale...\": Nirmala Sitharaman On Opposition Claims Against PM - NDTV",
      "description": "The BJP started a massive two-day strategy session today with an eye to the coming elections in nine states this year, which will be seen as the semi-final to the Lok Sabha elections in 2024.",
      "url": "https://www.ndtv.com/india-news/have-to-win-9-states-in-2023-bjp-after-day-one-of-executive-meet-3697345",
      "urlToImage": "https://c.ndtvimg.com/2023-01/kcpspoa8_narendra-modi-jp-nadda-_625x300_16_January_23.jpg",
      "publishedAt": "2023-01-16T15:46:00Z",
      "content": "The opposition accused PM through baseless claims,\" said Nirmala Sitharaman.\r\nNew Delhi: The BJP has started a massive two-day strategy session with an eye to the coming elections in nine states this… [+1949 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Ananthakrishnan G",
      "title": "Want govt nominee in panel for shortlisting SC and HC judges: Kiren Rijiju to CJI - The Indian Express",
      "description": "Highly-placed sources told The Indian Express the letter pointed out that the finalisation of the Memorandum of Procedure regarding the appointment of judges was still \"pending finalisation\" and gave “suggestions on how best it can be streamlined”.",
      "url": "https://indianexpress.com/article/india/supreme-court-collegium-government-law-minister-kiren-rijiju-cji-chandrachud-letter-8384342/",
      "urlToImage": "https://images.indianexpress.com/2023/01/CJI-Min.jpg",
      "publishedAt": "2023-01-16T15:01:05Z",
      "content": "Amid the tug of war between the Centre and Supreme Court Collegium over the appointment of judges, Union Law Minister Kiren Rijiju has written to Chief Justice of India D Y Chandrachud suggesting the… [+4653 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Samsung Galaxy S23 rumor roundup: best Galaxy ever? - Phandroid",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwIR24PsVRPs",
      "urlToImage": null,
      "publishedAt": "2023-01-16T14:47:51Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Luxury Cruise Wasn't Stuck, Tourists Took Boats For Sightseeing: Operator - NDTV",
      "description": "MV Ganga Vilas cruise didnt get stuck and the reports claiming so are \"absolutely\" false, said the operator of the ship which was flagged off by Prime Minister Narendra Modi on Friday.",
      "url": "https://www.ndtv.com/india-news/mv-ganga-vilas-luxury-river-cruise-wasnt-stuck-tourists-took-boats-for-sightseeing-operator-3697358",
      "urlToImage": "https://c.ndtvimg.com/2023-01/l5qj1ud8_mv-ganga-vilas_625x300_11_January_23.jpg",
      "publishedAt": "2023-01-16T14:44:00Z",
      "content": "The ship, however, wasanchored in the river and the tourists took the boats for sightseeing.\r\nNew Delhi: MV Ganga Vilas cruise didn't get stuck and the reports claiming so are absolutely false, said … [+1667 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Twinfinite"
      },
      "author": "Dylan Chaundy",
      "title": "Huge Elder Scrolls Fan Project Skyblivion Gets a Fancy New Trailer & a 2025 Release Window - Twinfinite",
      "description": "A new trailer has just dropped and a tentative 2025 release window has been locked in for the eagerly-anticipated Skyblivion mod.",
      "url": "https://twinfinite.net/2023/01/huge-elder-scrolls-fan-project-skyblivion-gets-a-fancy-new-trailer-a-2025-release-window/",
      "urlToImage": "https://twinfinite.net/wp-content/uploads/2023/01/Skyblivion.jpg",
      "publishedAt": "2023-01-16T14:30:47Z",
      "content": "The long-awaited Skyblivion fan project that looks to bring The Elder Scrolls IV: Oblivion and integrate it into the world of Skyrim has received a brand new trailer teasing a 2025 release date “at t… [+1382 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "India.com"
      },
      "author": "https://www.india.com/author/sumaila-zaman/",
      "title": "Samsung Galaxy A14 5G, Galaxy A23 5G Smartphones Launched; Check Price, Features Here - India.com",
      "description": "<B>Samsung Galaxy A Series Smartphone Launch Date: </B> Samsung on Monday launched two Galaxy A-series smartphones -- Galaxy A14 5G and Galaxy A23 5G -- for consumers in India",
      "url": "https://www.india.com/technology/samsung-galaxy-a14-5g-galaxy-a23-5g-smartphones-launch-date-price-specification-features-colour-how-to-buy-at-samsung-official-website-5856609/",
      "urlToImage": "https://static.india.com/wp-content/uploads/2023/01/Samsung-20.jpg",
      "publishedAt": "2023-01-16T14:21:44Z",
      "content": "Samsung Galaxy A Series Smartphone Launch Date: Samsung on Monday launched two Galaxy A-series smartphones -- Galaxy A14 5G and Galaxy A23 5G -- for consumers in India\r\nSamsung launches 2 Galaxy A-se… [+2469 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Pics: 53 Snakes Among Animals Found In Abandoned Bags At Chennai Airport - NDTV",
      "description": "Two bags containing snakes, monkeys and tortoises were found at Chennai Airport last week, officials said. The unattended bags were spotted by customs officials near the baggage claim belt at the airport on Wednesday.",
      "url": "https://www.ndtv.com/india-news/pics-53-snakes-among-animals-found-in-abandoned-bags-at-chennai-airport-3697048",
      "urlToImage": "https://c.ndtvimg.com/2023-01/hcorqr08_exotic-animals_625x300_16_January_23.jpg",
      "publishedAt": "2023-01-16T14:07:17Z",
      "content": "Further investigation is underway.\r\nNew Delhi: Two bags containing snakes, monkeys and tortoises were found at Chennai Airport last week, officials said. The unattended bags were spotted by customs o… [+834 chars]"
    }
  ]
  const [articles, setArticles] = useState(data);
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
