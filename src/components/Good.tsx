import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IGoods } from "../types/goods";

const Good = ({
  id,
  category,
  description,
  title,
  weight,
  isItemCreating,
  setChangeGoodFlag,
  setChangeId,
  setAddGoodFlag,
}: IGoods) => {
  const { deleteGoods } = useActions();
  const { isDeleteLoading, isChangeLoading, currentID } = useTypedSelector(
    (state) => state.goods
  );
  const removeGood = () => {
    deleteGoods(id);
  };
  const changeGood = () => {
    if (
      setChangeGoodFlag !== undefined &&
      setChangeId !== undefined &&
      setAddGoodFlag !== undefined
    ) {
      setAddGoodFlag(false);
      setChangeGoodFlag(true);
      setChangeId(id);
    }
  };
  return (
    <div className="border-[2px]  min-w-[290px] h-[200px] mt-[20px] p-5 mr-5 ">
      {isItemCreating ? (
        <h1>Товар создается... </h1>
      ) : isDeleteLoading && currentID === id ? (
        <h1>Товар удаляется... </h1>
      ) : isChangeLoading && currentID === id ? (
        <h1>Товар изменяется... </h1>
      ) : (
        <div className="flex flex-col h-full justify-between">
          <div>
            <h1 className="text-[20px]">{title}</h1>
            <h1>{weight}</h1>
            <h1>{description}</h1>
            <h1>{category}</h1>
          </div>
          <div className="flex text-[#3475D2] text-[18px]">
            <h1 onClick={changeGood} className="cursor-pointer">
              Edit
            </h1>
            <h1 onClick={removeGood} className="ml-4 cursor-pointer">
              Remove
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Good;
