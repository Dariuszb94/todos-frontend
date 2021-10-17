import React, { useState, useEffect } from "react";
import { ResetSubmit } from "./resetStyle";
const Reset = () => {
  const [hasError, setHasError] = useState(false);
  const handleSubmit = () => {
    sendReset();
  };
  const sendReset = async () => {
    const requestOptions = {
      method: "DELETE",
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
    <div>
      <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <ResetSubmit type="submit" value="Reset" />
      </form>
      {hasError ? "Error reseting todos" : null}
    </div>
  );
};

export default Reset;
