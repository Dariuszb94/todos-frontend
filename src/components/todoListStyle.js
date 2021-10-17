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
const slideInLeft = keyframes`
   0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
`;
const slideInRight = keyframes`
   0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0);
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
  align-items: center;
`;
export const TodoContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  &:nth-child(even) {
    background-color: rgb(247, 247, 247);
    animation: ${slideInLeft} 0.5s linear;
  }
  &:nth-child(odd) {
    animation: ${slideInRight} 0.5s linear;
  }
`;
export const Error = styled.div`
  color: red;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const TodoName = styled.div`
  font-size: 1rem;
  margin-right: 8px;
`;
export const Delete = styled.input`
  background-color: white;
  box-shadow: 0px 8px 12px rgb(0 0 0 / 10%);
  border: none;
  font-size: 1rem;
  border-radius: 4px;
  padding: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
  transition: 0.5s box-shadow linear, 0.5s background-color linear;
  &:hover {
    background-color: rgb(247, 247, 247);
    box-shadow: 0px 8px 12px rgb(0 0 0 / 50%);
  }
`;
