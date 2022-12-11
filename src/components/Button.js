import Button from "react-bootstrap/Button";

const ButtonTodo = (props) => {
  return <Button variant={props.variant}>{props.content}</Button>;
};

export default ButtonTodo;
