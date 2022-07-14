import React from "react";
import "./DataItem.scss";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../../apollo";
import receiveIcon from "../../assets/receive-square.svg";
import sendIcon from "../../assets/send-square.svg";
const DataItem = () => {
  const { data, loading, error } = useQuery(GET_DATA);
  console.log(data);
  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Loading...</p>;
  if (data)
    return (
      <div id="dataItem">
        <ul>
          <h2>{data.firstDate[0].date}</h2>
          {data.firstDate.map((res) => (
            <li key={res.id}>
              <div className="data-item">
                <div className="data-img">
                  <div className="status">
                    <img
                      src={
                        `${res.type}` === "deposit"
                          ? `${receiveIcon}`
                          : `${sendIcon}`
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="data-content">
                  <div>
                    <span className="transaction__type">
                      {`${res.type}` == "deposit"
                        ? `Received ${res.currency}`
                        : `Sent ${res.currency} `}{" "}
                    </span>
                    <span className="sent">
                      {" "}
                      {`${res.type}` == "deposit"
                        ? `From: ${res.name}`
                        : `To: ${res.name} `}{" "}
                    </span>
                  </div>

                  {res.type === "deposit" ? (
                    <div className="data-content-details">
                      <span className="price">
                        +{res.amount} {res.currency}
                      </span>
                      <span className="price_type">{res.type}</span>
                    </div>
                  ) : (
                    <div className="data-content-details withdrawal">
                      <span className="price">
                        -{res.amount} {res.currency}
                      </span>
                      <span className="price_type">{res.type}</span>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul>
          <h2>{data.secondDate[0].date}</h2>
          {data.secondDate.map((res) => (
            <li key={res.id}>
              <div className="data-item">
                <div className="data-img">
                  <div className="status">
                    <img
                      src={
                        `${res.type}` === "deposit"
                          ? `${receiveIcon}`
                          : `${sendIcon}`
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="data-content">
                  <div>
                    <span className="transaction__type">
                      {`${res.type}` == "deposit"
                        ? `Received ${res.currency}`
                        : `Sent ${res.currency} `}{" "}
                    </span>
                    <span className="sent">
                      {" "}
                      {`${res.type}` == "deposit"
                        ? `From: ${res.name}`
                        : `To: ${res.name} `}{" "}
                    </span>
                  </div>

                  {res.type === "deposit" ? (
                    <div className="data-content-details">
                      <span className="price">
                        +{res.amount} {res.currency}
                      </span>
                      <span className="price_type">{res.type}</span>
                    </div>
                  ) : (
                    <div className="data-content-details withdrawal">
                      <span className="price">
                        -{res.amount} {res.currency}
                      </span>
                      <span className="price_type">{res.type}</span>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul>
          <h2>{data.thirdDate[0].date}</h2>
          {data.thirdDate.map((res) => (
            <li key={res.id}>
              <div className="data-item">
                <div className="data-img">
                  <div className="status">
                    <img
                      src={
                        `${res.type}` === "deposit"
                          ? `${receiveIcon}`
                          : `${sendIcon}`
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="data-content">
                  <div>
                    <span className="transaction__type">
                      {`${res.type}` == "deposit"
                        ? `Received ${res.currency}`
                        : `Sent ${res.currency} `}{" "}
                    </span>
                    <span className="sent">
                      {" "}
                      {`${res.type}` == "deposit"
                        ? `From: ${res.name}`
                        : `To: ${res.name} `}{" "}
                    </span>
                  </div>

                  {res.type === "deposit" ? (
                    <div className="data-content-details">
                      <span className="price">
                        +{res.amount} {res.currency}
                      </span>
                      <span className="price_type">{res.type}</span>
                    </div>
                  ) : (
                    <div className="data-content-details withdrawal">
                      <span className="price">
                        -{res.amount} {res.currency}
                      </span>
                      <span className="price_type">{res.type}</span>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul>
          <h2>{data.fourthDate[0].date}</h2>
          {data.fourthDate.map((res) => (
            <li key={res.id}>
              <div className="data-item">
                <div className="data-img">
                  <div className="status">
                    <img
                      src={
                        `${res.type}` === "deposit"
                          ? `${receiveIcon}`
                          : `${sendIcon}`
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="data-content">
                  <div>
                    <span className="transaction__type">
                      {`${res.type}` == "deposit"
                        ? `Received ${res.currency}`
                        : `Sent ${res.currency} `}{" "}
                    </span>
                    <span className="sent">
                      {" "}
                      {`${res.type}` == "deposit"
                        ? `From: ${res.name}`
                        : `To: ${res.name} `}{" "}
                    </span>
                  </div>

                  {res.type === "deposit" ? (
                    <div className="data-content-details">
                      <span className="price">
                        +{res.amount} {res.currency}
                      </span>
                      <span className="price_type">{res.type}</span>
                    </div>
                  ) : (
                    <div className="data-content-details withdrawal">
                      <span className="price">
                        -{res.amount} {res.currency}
                      </span>
                      <span className="price_type">{res.type}</span>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul>
          <h2>{data.fifthDate[0].date}</h2>
          {data.fifthDate.map((res) => (
            <li key={res.id}>
              <div className="data-item">
                <div className="data-img">
                  <div className="status">
                    <img
                      src={
                        `${res.type}` === "deposit"
                          ? `${receiveIcon}`
                          : `${sendIcon}`
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="data-content">
                  <div>
                    <span className="transaction__type">
                      {`${res.type}` == "deposit"
                        ? `Received ${res.currency}`
                        : `Sent ${res.currency} `}{" "}
                    </span>
                    <span className="sent">
                      {" "}
                      {`${res.type}` == "deposit"
                        ? `From: ${res.name}`
                        : `To: ${res.name} `}{" "}
                    </span>
                  </div>

                  {res.type === "deposit" ? (
                    <div className="data-content-details">
                      <span className="price">
                        +{res.amount} {res.currency}
                      </span>
                      <span className="price_type">{res.type}</span>
                    </div>
                  ) : (
                    <div className="data-content-details withdrawal">
                      <span className="price">
                        -{res.amount} {res.currency}
                      </span>
                      <span className="price_type">{res.type}</span>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default DataItem;
