import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink).attrs()`
  background-color: white;
  box-shadow: 0px 8px 12px rgb(0 0 0 / 10%);
  border: none;
  border-radius: 4px;
  padding: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  transition: 0.5s box-shadow linear, 0.5s background-color linear;
  text-decoration: none;
  color: black;
  font-size: 1.6rem;
  &:hover {
    background-color: rgb(247, 247, 247);
    box-shadow: 0px 8px 12px rgb(0 0 0 / 50%);
  }
`;
