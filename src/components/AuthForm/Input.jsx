import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  padding: 8px 10px 8px 10px;
  background-color: white;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;

  &::placeholder {
    color: rgba(148, 166, 190, 1);
  }
`;

const StyledTextarea = styled.textarea`
  color: rgba(148, 166, 190, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -2%;
  text-align: left;

  &::placeholder {
    color: rgba(148, 166, 190, 1);
  }
`;

const BaseInput = ({
  tag = "input",
  id,
  name,
  placeholder = "",
  type = "text",
  error = false,
  onChange,
}) => {

  const Component = tag === "textarea" ? StyledTextarea : StyledInput;

  return (
    <Component
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      $error={error}
      onChange={onChange}
    />
  );
};

export default BaseInput;