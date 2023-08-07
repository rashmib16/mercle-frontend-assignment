import React from "react";
import { render } from "react-dom";
import EngagementMessagesOverTime from "./EngagementMessagesOverTime";

class App extends React.Component<{}, any> {
  render() {
    return <EngagementMessagesOverTime />;
  }
}

render(<App />, document.getElementById("root"));
