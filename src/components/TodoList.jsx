import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

export default function TodoList({isDone}) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  // TODO: 비즈니스로직 부분을 커스텀훅으로 변경해 보세요. src/hooks/useTodo.js 준비되어 있습니다.

  const toggleTodoItem = (todoToUpdate) => {
    // TODO: 리덕스 reducer 로 상태변경 해보세요.
    const updatedTodos = {...todoToUpdate, isDone: !todoToUpdate.isDone}
    dispatch(toggleTodo(updatedTodos))
  };

  const deleteTodoItem = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h2>{isDone ? "Done" : "Wokring..."}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoItem={toggleTodoItem}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </ul>
    </>
  );
}
