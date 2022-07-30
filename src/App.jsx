import React from "react";
import "./App.css";
import Form from "./components/Form";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="crud-app">
      <h1>Crud App</h1>
      <div className="content">
        <Form></Form>
        <Posts></Posts>
      </div>
    </div>
  );
};

export default App;
