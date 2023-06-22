import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import { useParams } from "react-router-dom";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const [timePeriod, setTimePeriod] = useState("7d");
  console.log(data);



  

  return <div>CryptoDetails {coinId}</div>;
};

export default CryptoDetails;
