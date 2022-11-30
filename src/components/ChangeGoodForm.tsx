import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface ChangeGoodFormProps {
  setChangeGoodFlag: React.Dispatch<React.SetStateAction<boolean>>;
  changeId: string;
}

const ChangeGoodForm = ({
  changeId,
  setChangeGoodFlag,
}: ChangeGoodFormProps) => {
  const { goods } = useTypedSelector((state) => state.goods);
  const { changeGoods } = useActions();
  const [title, setTitle] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  React.useEffect(() => {
    const find = goods.find((good) => good.id === changeId);
    if (find) {
      setTitle(find.title);
      setWeight(find.weight);
      setDescription(find.description);
      setCategory(find.category);
    }
  }, [changeId]);
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
  const closeFormHandler = () => {
    setChangeGoodFlag(false);
  };
  const changeGoodHandler = () => {
    if (
      title !== "" &&
      weight !== "" &&
      description !== "" &&
      category !== ""
    ) {
      changeGoods({
        id: changeId,
        title,
        weight,
        description,
        category,
      });
      setTitle("");
      setWeight("");
      setDescription("");
      setCategory("");
      setChangeGoodFlag(false);
    } else {
      alert("Заполните все поля!");
    }
  };
  return (
    <div className="flex flex-col  max-w-[300px] border-l-2 border-[left] border-[#3475D2] pl-5">
      <h2 className="mb-3 text-[20px]">Изменить товар</h2>
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
          onClick={changeGoodHandler}
          className="bg-[#3475D2] text-white p-3 rounded-2xl max-w-[100px]"
        >
          Изменить
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

export default ChangeGoodForm;
