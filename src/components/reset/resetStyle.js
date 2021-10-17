import styled from "styled-components";
export const ResetSubmit = styled.input`
  margin-top: 16px;
  background-color: white;
  box-shadow: 0px 8px 12px rgb(0 0 0 / 10%);
  border: none;
  border-radius: 4px;
  padding: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  transition: 0.5s box-shadow linear, 0.5s background-color linear;
  margin-bottom: 16px;
  &:hover {
    box-shadow: 0px 8px 12px rgb(0 0 0 / 30%);
    background-color: rgb(247, 247, 247);
  }
`;
