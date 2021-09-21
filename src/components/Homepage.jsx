import millify from "millify";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";
import Loader from "./Loader";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  const style = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#003a8c",
  };
  const titleStyle = { color: "#85a5ff", fontFamily: "'Popins', sans-serif" };

  if (isFetching) return <Loader />;

  return (
    <div>
      <Typography.Title strong={true} level={2} style={titleStyle}>
        Global Crypto Stats
      </Typography.Title>
      <Card bordered={false}>
        <Row gutter={[30, 30]}>
          <Col xs={12} lg={8}>
            <Statistic
              valueStyle={style}
              title="Total Coins"
              value={globalStats.total}
            />
          </Col>
          <Col xs={12} lg={8}>
            <Statistic
              valueStyle={style}
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
            />
          </Col>
          <Col xs={12} lg={8}>
            <Statistic
              valueStyle={style}
              title="Total Market Cap"
              value={`$${millify(globalStats.totalMarketCap)}`}
            />
          </Col>
          <Col xs={12} lg={8}>
            <Statistic
              valueStyle={style}
              title="Total 24h Volume"
              value={`$${millify(globalStats.total24hVolume)}`}
            />
          </Col>
          <Col xs={12} lg={8}>
            <Statistic
              valueStyle={style}
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
            />
          </Col>
        </Row>
      </Card>
      <div className="home-heading-container">
        <Typography.Title level={2} style={titleStyle}>
          Top 10 Coins
        </Typography.Title>
        <Typography.Text strong style={{ fontSize: "1.3rem" }}>
          <Link to="/cryptocurrencies">Show all</Link>
        </Typography.Text>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Typography.Title level={2} style={titleStyle}>
          Latest news
        </Typography.Title>
        <Typography.Text strong style={{ fontSize: "1.3rem" }}>
          <Link to="/cryptocurrencies">Show all</Link>
        </Typography.Text>
      </div>
      <News simplified />
    </div>
  );
};

export default Homepage;
