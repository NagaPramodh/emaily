import "./App.css";
import { Provider, connect } from "react-redux";
import * as actions from "./actions";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import reducers from "./reducers";
import Landing from "./components/landing";
import { Component } from "react";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact={true} path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
