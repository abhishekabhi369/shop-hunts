import React from "react";
import "./Newsearch.css";
import Home from "./Home";
function Newsearch() {
  const borderStyle = {
    border: "1px solid #C75DEB",
    // You can add more styles here if needed
  };
  return (
    <div>
      <div className="video-bg">
        <video width="320" height="240" autoPlay muted loop>
          <source
            src="https://assets.codepen.io/3364143/7btrrd.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="le-re">
        <div className="le">
          <div className="main">
            <div className="header">
              <div className="menu-circle"></div>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
              </div>
              <div className="header-profile">
                <div className="notification">
                  <span
                    className="notification-number"
                    style={{ color: "white" }}
                  >
                    3
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                  </svg>
                </div>
                <img
                  className="profile-img"
                  src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="wrapper">
              <div className="main-container">
                <div className="content-wrapper">
                  <div className="content-section"></div>
                  <div className="content-section">
                    <div className="content-section-title">
                      Apps in your plan
                    </div>
                    <div className="apps-card">
                      <div className="app-card">
                        <span>
                          <svg viewBox="0 0 52 52" style={borderStyle}>
                            <g xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                fill="#3a3375"
                                data-original="#3a3375"
                              />
                              <path
                                d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                                fill="#e4d1eb"
                                data-original="#e7adfb"
                              />
                            </g>
                          </svg>
                          After Effects
                        </span>
                        <div class="app-card__subtext">
                          Industry Standart motion graphics & visual effects
                        </div>
                        <div class="app-card-buttons">
                          <button class="content-button status-button">
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="re">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default Newsearch;
