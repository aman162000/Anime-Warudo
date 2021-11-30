import Data from "./Data";

const Detail = (props) => {
  return (
    <div>
      <div className="container-fluid" style={{ padding: "0" }}>
        {props.detail.trailer_url !== null &&
        props.detail.trailer_url !== undefined ? (
          <>
            <embed width="100%" height="600" src={props.detail.trailer_url} />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="container my-4">
        <h2>
          {JSON.parse(JSON.stringify(`${props.detail.title_japanese}`))} |{" "}
          {props.detail.title_english} | {props.detail.type}
        </h2>
        <div className="row mt-5 ">
          <div className="col-4 p-5">
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src={props.detail.image_url}
              alt=""
              srcset=""
            />
          </div>
          <div className="col-8 px-4 py-3">
            <h4>Synopsis:</h4>
            <p
              className="text-start"
              style={{ color: "white", fontFamily: "sans-serif" }}
            >
              {props.detail.synopsis}
            </p>
            <h4>Background:</h4>
            <p
              className="text-start"
              style={{ color: "white", fontFamily: "sans-serif" }}
            >
              {props.detail.background === null
                ? "None"
                : props.detail.background}
            </p>
            {props.detail.publishing !== undefined ? (
              <div>
                <h4>Published:</h4>
                <span
                  className="text-start"
                  style={{ color: "white", fontFamily: "sans-serif" }}
                >
                  {props.detail.published.string}
                </span>
              </div>
            ) : (
              <div>
                <h4>Aired:</h4>
                <span
                  className="text-start"
                  style={{ color: "white", fontFamily: "sans-serif" }}
                >
                  {props.detail["aired"] !== undefined
                    ? props.detail.aired.string
                    : ""}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <Data
          type={props.param.type}
          heading={"Recommendations"}
          data={props.recommendation}
        />
      </div>
    </div>
  );
};

export default Detail;
