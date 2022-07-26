import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  border: unset;
  cursor: pointer;
  margin: auto;
  margin-top: 30px;
  border-radius: 9px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  transition: 0.2s;

  :hover {
    opacity: 60%;
  }
`;
