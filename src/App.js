import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Typography from "antd/es/typography/Typography";
import { Space } from "antd";
import { Layout } from "antd";
import {
  HomePage,
  Navbar,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import { HomeFilled } from "@ant-design/icons";
import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />

              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />

              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />

              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
