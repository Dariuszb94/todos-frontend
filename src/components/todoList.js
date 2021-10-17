import React, { useState, useEffect } from "react";
import Add from "./add/add";
import Reset from "./reset/reset";
import {
  Loading,
  Todo,
  TodoContainer,
  Todos,
  Error,
  TodoName,
  Delete,
  StyledLink,
} from "./todoListStyle.js";
import { todoUrl } from "./consts";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
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
    <>
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
                    <TodoName>{todo.name}</TodoName>
                    <picture>
                      {todo.completed ? (
                        <CheckBoxIcon />
                      ) : (
                        <HourglassEmptyIcon />
                      )}
                    </picture>
                    <Delete type="submit" value="Delete" />
                  </Todo>
                  <StyledLink to={{ pathname: `/edit/${todo.id}` }}>
                    Edit
                  </StyledLink>
                </TodoContainer>
              );
            })
          : null}
      </Todos>
    </>
  );
};
export default TodoList;
