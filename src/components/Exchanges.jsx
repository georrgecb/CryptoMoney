import React from "react";
import { Col, Row, Collapse, Typography, Image } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import Loader from "./Loader";
import HTMLReactParser from "html-react-parser";

const Exchanges = () => {
  const { data, isFetching } = useGetCryptosQuery(100);
  const coins = data?.data?.coins;
  const { Panel } = Collapse;
  const { Title, Text } = Typography;
  const style = { fontSize: "1rem" };
  const titleStyle = { color: "#85a5ff", fontFamily: "'Popins', sans-serif" };

  if (isFetching) return <Loader />;

  return (
    <>
      <div className="coin-heading-container">
        <Title level={1} style={titleStyle}>
          Exchanges
        </Title>
        <Text strong style={{ fontSize: "1rem", marginBottom: 20 }}>
          Open this page at work. You'll look smart.
        </Text>
      </div>
      <Row style={{ marginTop: 40 }}>
        <Col xs={0} md={6}>
          <Title level={4} style={titleStyle}>
            Name
          </Title>
        </Col>
        <Col xs={8} md={6}>
          <Title level={4} style={titleStyle}>
            Symbol
          </Title>
        </Col>
        <Col xs={8} md={6}>
          <Title level={4} style={titleStyle}>
            Price ($)
          </Title>
        </Col>
        <Col xs={8} md={6}>
          <Title level={4} style={titleStyle}>
            Change (%)
          </Title>
        </Col>
      </Row>

      <Collapse>
        {coins.map((coin, index) => (
          <Panel
            showArrow={false}
            header={
              <Row>
                <Col span={6} xs={0} md={6}>
                  <Text strong style={style}>
                    <Image
                      src={coin.iconUrl}
                      alt="coin logo"
                      width={14}
                      preview={false}
                    />
                    &nbsp;
                    {coin.name}
                  </Text>
                </Col>
                <Col xs={8} md={6}>
                  <Text strong style={style}>
                    {coin.symbol}
                  </Text>
                </Col>
                <Col xs={8} md={6}>
                  <Text strong style={style}>
                    {millify(coin.price)}
                  </Text>
                </Col>
                <Col xs={8} md={6}>
                  <Text
                    strong
                    style={{
                      fontSize: "1rem",
                      color: coin.change > 0 ? "green" : "red",
                    }}
                  >
                    {coin.change}
                  </Text>
                </Col>
              </Row>
            }
            key={index}
          >
            <Text>{HTMLReactParser(coin.description)}</Text>
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default Exchanges;
