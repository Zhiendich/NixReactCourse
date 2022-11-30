import React from "react";
import { useActions } from "../hooks/useActions";
import { v4 } from "uuid";

interface AddGoodFormProps {
  setAddGoodFlag: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddGoodForm = ({ setAddGoodFlag }: AddGoodFormProps) => {
  const { addGoods } = useActions();
  const [title, setTitle] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const changeWeightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };
  const changeDescriptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const changeCategoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  const addNewGood = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (
      title !== "" &&
      weight !== "" &&
      description !== "" &&
      category !== ""
    ) {
      addGoods({
        id: v4(),
        title,
        weight,
        description,
        category,
      });
      setTitle("");
      setWeight("");
      setDescription("");
      setCategory("");
    } else {
      alert("Заполните все поля!");
    }
  };
  const closeFormHandler = () => {
    setAddGoodFlag(false);
  };
  return (
    <div className="flex flex-col  max-w-[300px] border-l-2 border-[left] border-[#3475D2] pl-5">
      <h2 className="mb-3 text-[20px]">Добавить товар</h2>
      <input
        value={title}
        onChange={changeTitleHandler}
        className="outline-none p-2 border-[2px] border-[#3475D2] mb-3"
        type="text"
        placeholder="title"
      />
      <input
        value={weight}
        onChange={changeWeightHandler}
        className="outline-none p-2 border-[2px] border-[#3475D2] mb-3"
        type="text"
        placeholder="weight"
      />
      <input
        value={description}
        onChange={changeDescriptionHandler}
        className="outline-none p-2 border-[2px] border-[#3475D2] mb-3"
        type="text"
        placeholder="description"
      />
      <input
        value={category}
        onChange={changeCategoryHandler}
        className="outline-none p-2 border-[2px] border-[#3475D2] mb-3"
        type="text"
        placeholder="category"
      />
      <div className="flex ">
        <button
          onClick={addNewGood}
          className="bg-[#3475D2] text-white p-3 rounded-2xl max-w-[100px]"
        >
          Добавить
        </button>
        <button
          onClick={closeFormHandler}
          className="bg-[#3475D2] text-white p-3 rounded-2xl max-w-[100px] ml-2"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default AddGoodForm;
