import React from "react";
import Navigation from "./components/Navigation";
import List from "./components/List";
import "./App.css";

const App = props => {
  return (
    <div>
      <Navigation />
      <List />
    </div>
  );
};

export default App;
