import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Title, Text } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data } = useGetCryptosQuery(100);
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 24,
  });

  if (!cryptoNews?.value) return <Loader />;

  return (
    <div>
      {!simplified && (
        <div className="coin-heading-container">
          <Title
            level={1}
            style={{ color: "#85a5ff", fontFamily: "'Popins', sans-serif" }}
          >
            Crypto News
          </Title>
          <Text strong style={{ fontSize: "1rem", marginBottom: 20 }}>
            Mostly bad news. Especially if you're poor. Capitalism, am I right?
          </Text>
        </div>
      )}
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              style={{ width: 250, marginTop: 40 }}
              size="large"
              className="select-news"
              showSearch
              placeholder="Select coin"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin, index) => (
                <Option key={index} value={coin.name}>
                  {coin.name}
                </Option>
              ))}
            </Select>
          </Col>
        )}

        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <a href={news.url} target="_blank" rel="noreferrer">
              <Card
                hoverable
                className="news-card"
                title={
                  <div>
                    <Avatar
                      src={news?.provider[0]?.image?.thumbnail?.contentUrl}
                      alt=""
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                }
                bordered={true}
              >
                <Title level={4} style={{ fontFamily: "'Popins', sans-serif" }}>
                  {news.name}
                </Title>
                <p>
                  {news.description.length > 100
                    ? `${news?.description.substring(0, 100)}...`
                    : news.description}
                </p>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;
