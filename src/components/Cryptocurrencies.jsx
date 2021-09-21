import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { Title, Text } = Typography;

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <div>
      {!simplified && (
        <>
          <div className="coin-heading-container">
            <Title
              level={1}
              style={{ color: "#85a5ff", fontFamily: "'Popins', sans-serif" }}
            >
              Cryptocurrencies
            </Title>
            <Text strong style={{ fontSize: "1rem", marginBottom: 20 }}>
              Many are useless. Just like Elon Musk's ideas.
            </Text>
          </div>

          <div style={{ width: 250, margin: "40px 0 30px 0" }}>
            <Input
              placeholder="Search coin"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: 10, fontSize: "1rem" }}
            />
          </div>
        </>
      )}
      <Row gutter={[12, 12]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                className="crypto-card"
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt="crypto logo"
                  />
                }
                hoverable
              >
                <p className="coin-stats-card">
                  Price: ${millify(currency.price)}
                </p>
                <p className="coin-stats-card">
                  Market Cap: ${millify(currency.marketCap)}
                </p>
                <p className="coin-stats-card">
                  Daily Change: {millify(currency.change)}%
                </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
