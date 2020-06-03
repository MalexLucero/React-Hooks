import React, { useState } from "react";

import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");

  const onPostButtonClick = () => {
    setResource("posts");
  };
  const onTodosButtonClick = () => {
    setResource("todos");
  };

  return (
    <div className="ui container" style={{ marginTop: "2rem" }}>
      <div className="ui block header">
        <button
          onClick={onPostButtonClick}
          className="ui inverted large violet button"
        >
          Post
        </button>
        <button
          onClick={onTodosButtonClick}
          className="ui inverted large violet button"
        >
          Todos
        </button>
      </div>
      <div className="ui very padded segment">
        <ResourceList resource={resource} />
        <UserList />
      </div>
    </div>
  );
};

export default App;
