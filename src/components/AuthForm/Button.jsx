import styled from "styled-components";

const colors = {
  primary: "#94A6BE",
  secondary: "#565eefff",
  tertiary: "#ffffff",
};

const SButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 40px;
  padding: 0 19px;
  border-radius: 4px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  font-size: 14px;

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
  border-color: #565eef;;
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