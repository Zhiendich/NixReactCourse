import React from "react";
import { v4 } from "uuid";
import { useAppDispatch } from "../hooks/UseTypeSelected";
import { addTodo } from "../store/reducers/TodoReducer";
import { ToDoItemProps } from "../types/ToDoItemsList";

interface IAddForm {
  add: boolean;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
  todos: ToDoItemProps[];
}
const AddForm = ({ add, setAdd, todos }: IAddForm) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const dispatch = useAppDispatch();
  const addToDoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (todos.length > 10) {
      alert("Слишком много дел, пора начать что-то делать!");
      setAdd(!add);
    } else if (title !== "" && description !== "") {
      const newToDo = {
        id: v4(),
        status: "Open",
        createDate: new Date().toLocaleString(),
        title,
        description,
      };
      dispatch(addTodo(newToDo));
      setTitle("");
      setDescription("");
      setAdd(!add);
    } else {
      alert("Заполните все поля!");
      return;
    }
  };
  return (
    <div className="bg-[white]  z-10 fixed top-0 left-0 w-full h-screen flex justify-center items-center">
      <div className="h-[280px] flex flex-col justify-between relative">
        <span onClick={() => setAdd(!add)} className="exit" />
        <div>
          <h1 className="mb-2">Заголовок</h1>
          <input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            className="border-[#2261CB] border-[2px] rounded-xl outline-none p-3 w-full"
            type="text"
          />
        </div>
        <div>
          <h1 className="mb-2">Описание</h1>
          <input
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
            className="border-[#2261CB] border-[2px] rounded-xl outline-none p-3 w-full"
            type="text"
          />
        </div>
        <button
          onClick={addToDoHandler}
          className="rounded-xl bg-[#2261CB] text-white w-full h-[50px]">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddForm;
