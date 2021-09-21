import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "antd/dist/antd.css";

import {
  Navbar,
  Exchanges,
  Homepage,
  CryptoDetails,
  Cryptocurrencies,
  News,
} from "./components";

function App() {
  const { Content, Footer } = Layout;

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Layout>
          <Content style={{ padding: 30 }} className="content-block">
            <div style={{ marginTop: 10 }}>
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 70,
              background: "#151517",
            }}
          >
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Made with 🔥 &nbsp;in Bucharest.
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
