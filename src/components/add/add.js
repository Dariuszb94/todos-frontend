import React, { useState, useEffect } from "react";
import { Submit, Input } from "./addStyle";
const Add = () => {
  const [todo, setTodo] = useState("");
  const [hasError, setHasError] = useState(false);
  const [emptyTodo, setEmptyTodo] = useState(true);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postTodo();
  };
  useEffect(() => {
    todo.length ? setEmptyTodo(false) : setEmptyTodo(true);
  }, [todo]);
  const postTodo = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: todo, completed: false }),
    };
    const todoResponse = await fetch(
      "http://localhost:8080/todos/",
      requestOptions
    );

    if (todoResponse.status == 500) {
      setHasError(true);
      return;
    } else window.location.reload(false);
  };
  return (
    <section>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input type="text" value={todo} onChange={handleChange} />
        <Submit type="submit" value="Send" disable={emptyTodo} />
      </form>
      {hasError ? "Error sending todo" : null}
    </section>
  );
};

export default Add;
