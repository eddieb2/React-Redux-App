import React from "react";
import Navigation from "./components/Navigation";
import List from "./components/List";
import "./App.css";
import { connect } from "react-redux";
import TakeHome from "./components/TakeHome";

const App = props => {
  return (
    <div>
      <Navigation />
      {props.takeHome.length > 0 ? <TakeHome /> : null}
      {!props.takeHome.length ? <List /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    takeHome: state.takeHome
  };
};

export default connect(mapStateToProps, {})(App);
