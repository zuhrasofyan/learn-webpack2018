import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "antd";

const App = () => {
  return (
    <div>
      <p>React here!</p>
      <DatePicker />
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));