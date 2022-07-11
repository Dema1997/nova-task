import styled from "styled-components";

const StyledTextArea = styled.textarea`
  resize: none;
  margintop: 20px;
  flex: 1;
  padding: 15px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  font-weight: bold;
`;

interface TextAreaProps {
  rows: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  name: string;
  value: string;
  placeholder: string;
  style?: React.CSSProperties;
}

const TextArea: React.FC<TextAreaProps> = ({
  rows,
  onChange,
  name,
  value,
  placeholder,
  style,
}) => {
  return (
    <StyledTextArea
      style={style}
      rows={rows}
      onChange={onChange}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
};

export { TextArea };
