
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  background: #101010;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;


const Button = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  outline: none;
  padding: 5px 10px;
`;
const ButtonDeleteAll = styled.button(Button);

function TodoList(props) {
  const { todos, deleteTodo, deleteTodoAll} = props;

  return (
    <List>
      {todos.map((todo, index) => (
        <Item key={index}>
          {todo}
          <Button onClick={() => deleteTodo(index)}>Delete</Button>
        </Item>
      ))}
       {
        todos.length > 0 && (
          <ButtonDeleteAll onClick={deleteTodoAll}>Delete All</ButtonDeleteAll>
        )
      }
    </List>
  );
}

export default TodoList;
