import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Submit, Input, DoneToggle, EditForm } from "./editStyle";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Edit = () => {
  const [todo, setTodo] = useState({});
  const [todoNew, setTodoNew] = useState({});
  const [hasError, setHasError] = useState(false);
  let { id } = useParams();
  const history = useHistory();

  const setName = (event) => {
    let updatedName;
    if (event.target.value) updatedName = event.target.value;
    else updatedName = todo.name;
    setTodoNew((prevState) => ({
      ...prevState,
      name: updatedName,
    }));
  };

  const handleSubmit = () => {
    patchTodo();
  };

  const setDone = () => {
    setTodoNew((prevState) => ({
      ...prevState,
      completed: !prevState.completed,
    }));
  };
  const patchTodo = async () => {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoNew),
    };
    const todoResponse = await fetch(
      `http://localhost:8080/todos/${id}`,
      requestOptions
    );

    if (todoResponse.status == 500) {
      setHasError(true);
      return;
    } else history.push(`/`);
  };
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    const todoResponse = await fetch(`http://localhost:8080/todos/${id}`);
    if (todoResponse.status == 500) {
      setHasError(true);
      return;
    }
    const todo = await todoResponse.json();
    setTodo(todo);
    setTodoNew(todo);
  };
  return (
    <div>
      <EditForm
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <Input type="text" placeholder={todo.name} onChange={setName} />
        <DoneToggle type="button" onClick={setDone} done={todoNew.completed}>
          DONE
        </DoneToggle>
        <Submit type="submit" value="Send" />
      </EditForm>
      <NavLink to={{ pathname: `/` }}>Go back</NavLink>
      {hasError ? "Error sending todo" : null}
    </div>
  );
};

export default Edit;