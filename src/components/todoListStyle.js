import { keyframes } from "styled-components";
import styled from "styled-components";
const rotate = keyframes`
   0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
export const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
export const Todos = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const Todo = styled.form`
  display: flex;
  justify-content: center;
`;
export const TodoContainer = styled.li`
  display: flex;
  justify-content: center;
`;
export const Error = styled.div`
  color: red;
  font-weight: bold;
  margin-bottom: 20px;
`;
