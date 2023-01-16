import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://images.macrumors.com/t/5FCFjsNQJCL9dBjMtKcEdpAOaas=/1600x/article-new/2021/12/apple-ar-headset-concept-2.jpeg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="referrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
