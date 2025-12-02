import styled from "styled-components";

//окончательный вариант
const colors = {
  primary: "#D5FF42",
  secondary: "#101010",
  tertiary: "#F3F3F3",
};

const SButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 0 19px;
  border-radius: 50px;
  border: 1px solid #101010;

  &:disabled {
    background-color: #d9d9d9;
    color: white;
    border: none;
  }
`;

const TextButton = styled(SButton)`
  background-color: ${({ $type }) => colors[$type]};
  ${({ $type }) => ($type === "secondary" ? "color: #FFFFFF" : "")};
  width: 100%;
`;

const IconButton = styled(SButton)`
  width: 40px;
  border-radius: 50%;
  background-color: #101010;
`;

const Button = ({
  text,
  type = "primary",
  disabled = false,
  onClick,
  children,
}) => {
  if (type === "icon")
    return (
      <IconButton onClick={onClick} $type={type} disabled={disabled}>
        {children}
      </IconButton>
    );
  return (
    <TextButton onClick={onClick} $type={type} disabled={disabled}>
      {text}
    </TextButton>
  );
};

export default Button;