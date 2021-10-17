import React, { useState, useEffect } from "react";
import Add from "./add/add";
import Reset from "./reset/reset";
import { NavLink } from "react-router-dom";
import { Loading, Todo, TodoContainer, Todos, Error } from "./todoListStyle.js";
import { todoUrl } from "./consts";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    retrieveTodos();
  }, []);

  const retrieveTodos = async () => {
    setLoading(true);
    const todoResponse = await fetch(todoUrl);
    if (todoResponse.status !== 200) {
      setHasError(true);
      return;
    }
    const todos = await todoResponse.json();
    setLoading(false);
    setTodos(todos);
  };
  const deleteTodo = async (id) => {
    const todoResponse = await fetch(todoUrl + id, {
      method: "DELETE",
    });

    if (todoResponse.status == 500) {
      setHasError(true);
      return;
    } else window.location.reload(false);
  };

  return (
    <div>
      {loading ? <Loading /> : null}
      {hasError ? <Error>An error has occured</Error> : null}
      <Add />
      <Reset />
      <Todos>
        {todos.length > 0
          ? todos.map((todo) => {
              return (
                <TodoContainer key={todo.id}>
                  <Todo onSubmit={() => deleteTodo(todo.id)}>
                    <div>{todo.name}</div>
                    <div>{todo.completed}</div>
                    <input type="submit" value="Delete" />
                  </Todo>
                  <NavLink to={{ pathname: `/edit/${todo.id}` }}>Edit</NavLink>
                </TodoContainer>
              );
            })
          : null}
      </Todos>
    </div>
  );
};
export default TodoList;
