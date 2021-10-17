import styled from "styled-components";

export const Submit = styled.input`
  pointer-events: ${(props) => (props.disable ? "none" : "unset")};
  background-color: white;
  background-color: ${(props) => (props.disable ? "white" : "rgb(0, 128, 0)")};
  color: ${(props) => (props.disable ? "black" : "white")};
  box-shadow: ${(props) =>
    props.enable
      ? "0px 8px 12px rgb(0 204 0 / 10%)"
      : "0px 8px 12px rgb(0 0 0 / 10%)"};
  border: none;
  border-radius: 4px;
  padding: 8px;
  outline: none;
  cursor: pointer;
  transition: 0.5s box-shadow linear, 0.5s background-color linear;
  font-size: 1rem;
  &:hover {
    background-color: rgba(0, 128, 0, 0.85);
    box-shadow: 0px 8px 12px rgb(0 204 0 / 50%);
  }
`;
export const Input = styled.input`
  height: 33px;
  box-sizing: border-box;
  box-shadow: 0px 8px 12px rgb(0 0 0 / 10%);
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
`;
export const DoneToggle = styled.button`
  height: 33px;
  margin: 12px 0;
  box-sizing: border-box;
  box-shadow: 0px 8px 12px rgb(0 0 0 / 10%);
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.done ? "rgb(0, 128, 0)" : "white")};
  color: ${(props) => (props.done ? "white" : "black")};
  padding: 8px;
  cursor: pointer;
  transition: 0.5s box-shadow linear, 0.5s background-color linear;
  font-size: 1rem;
`;
export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto 40px auto;
`;
