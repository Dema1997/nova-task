import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  margin: auto;
  padding: 10px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #222222;
  font-weight: bold;
`;

interface ButtonProps {
  children: any;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, style, type }) => {
  return (
    <StyledButton type={type} style={style}>
      {children}
    </StyledButton>
  );
};

export { Button };
