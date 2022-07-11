import styled from "styled-components";

interface InputProps {
  value: string;
  name: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const StyledInput = styled.input`
  margin-top: 30px;
  padding: 15px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  font-weight: bold;
`;

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  name,
  placeholder,
  type,
}) => (
  <StyledInput
    style={{ width: "100%" }}
    onChange={onChange}
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
  />
);

export { Input };
