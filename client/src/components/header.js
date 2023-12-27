import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "../components/payments";
class Header extends Component {
  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return "Still deciding";
      case false:
        return (
          <li>
            <a href="/auth/google">Login With google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payment />
          </li>,
          <li key="2">
            <a href="/api/logout">Log out</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? "/surveys" : "/"} className="brand-logo">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">
            <li>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStatetoProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStatetoProps)(Header);
