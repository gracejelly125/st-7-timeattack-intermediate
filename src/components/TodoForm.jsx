import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import useInput from "../hooks/useInput";

export default function TodoForm() {
  const [title, setTitle, titleHandler, titleReset] = useInput("");
  const [content, setContent, contentHandler, contentReset] = useInput("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(), title, content, isDone: false
    };
    // TODO: 리덕스의 reducer 로 상태 변경할 수 있게 해주세요.
    dispatch(addTodo(newTodo))   
  };

  return (
    <form onSubmit={onSubmit}>
      <label>제목:</label>
      <input name="title" type="text" value={title} onChange={titleHandler}/>
      <label>내용:</label>
      <input name="content" type="text" value={content} onChange={contentHandler}/>
      <button type="submit">추가</button>
    </form>
  );
}
