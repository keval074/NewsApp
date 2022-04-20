import React from "react";

const Newsitems = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className="badge rounded-pill bg-dark"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
        </div>
        <img
          src={
            !imgUrl
              ? "https://c.ndtvimg.com/2021-06/i0ng5r8g_snow-mountain-electricity-generic-power-generic-pixabay_625x300_18_June_21.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <p className="card-text"></p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm  "
            style={{ backgroundColor: "#FD5D5D" }}
          >
            Read More!
          </a>
        </div>
      </div>
    </div>
  )
}

export default Newsitems 