import styled from "styled-components";
import {FC} from "react";

const StyledButton = styled.button`
  font-size: 16px;
  min-width: 64px;
  outline: none;
  border: 1px solid transparent;
  font-family: ArchivoBlack, sans-serif;
  
  :hover {
    cursor: pointer;
    border-bottom: 1px solid black;
  }
`;

interface ButtonProps {
    children: string
}

const Button: FC<ButtonProps> = ({children}) => {
    console.log(children);
    return (
        <StyledButton>{children}</StyledButton>
    );
};

export default Button;