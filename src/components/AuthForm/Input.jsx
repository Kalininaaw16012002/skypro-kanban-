import styled from "styled-components";

// Создаем стилизованные компоненты
const StyledInput = styled.input`
  width: 100%;
  outline: none;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
  border: none;
  font-size: 16px;

  &::placeholder {
    color: #999999;
  }

  ${({ $error }) => $error && `outline: 0.7px solid red;`}
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
  border: none;
  font-size: 16px;

  &::placeholder {
    color: #999999;
  }

  ${({ $error }) => $error && `outline: 0.7px solid red;`}
`;

const BaseInput = ({
  tag = "input",
  id,
  name,
  placeholder = "",
  type = "text",
  error = false,
}) => {
  // Выбираем компонент в зависимости от тега
  const Component = tag === "textarea" ? StyledTextarea : StyledInput;

  return (
    <Component
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      $error={error}
    />
  );
};

export default BaseInput;