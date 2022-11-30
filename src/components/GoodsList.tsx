import React, { useState, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IGoods } from "../types/goods";
import AddGoodForm from "./AddGoodForm";
import ChangeGoodForm from "./ChangeGoodForm";
import Good from "./Good";

const GoodsList = () => {
  const { goods, isError, isLoading, isAddLoading } = useTypedSelector(
    (state) => state.goods
  );
  const { fetchGoods } = useActions();
  const [addGoodFlag, setAddGoodFlag] = useState(false);
  const [changeGoodFlag, setChangeGoodFlag] = useState(false);
  const [changeId, setChangeId] = useState("");
  const [filteredGoods, setFilteredGoods] = useState<IGoods[]>([]);
  const [filterInput, setFilterInput] = useState("");
  const [field, setField] = useState("");
  useEffect(() => {
    fetchGoods();
  }, []);
  useEffect(() => {
    setFilteredGoods(goods);
  }, [goods]);
  useEffect(() => {
    setFilteredGoods(
      goods.filter((good) =>
        good.title.toLowerCase().includes(filterInput.toLowerCase())
      )
    );
  }, [filterInput, goods]);
  const filterInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value);
  };
  const sortByField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setField(e.target.value);
  };
  const showGoods = React.useMemo(() => {
    setFilteredGoods(
      filteredGoods.sort((a, b) =>
        b[field as keyof IGoods]! > a[field as keyof IGoods]! ? -1 : 1
      )
    );
  }, [field]);

  const addGoodHandler = React.useCallback(() => {
    setChangeGoodFlag(false);
    setAddGoodFlag(true);
  }, []);
  if (isLoading) {
    return (
      <h1 className="text-center mt-[45vh] text-[30px]">Идет загрузка...</h1>
    );
  }
  if (isError) {
    return <h1>{isError}</h1>;
  }
  return (
    <div className=" max-w-[1280px] p-4 mx-auto flex">
      <div>
        <input
          value={filterInput}
          onChange={filterInputHandler}
          type="text"
          placeholder="Search for goods"
          className="border-[3px] border-[#3475D2] p-2 outline-none"
        />
        <select
          className="border-[2px] border-[#3475D2] p-1 outline-none ml-4 "
          value={field}
          onChange={sortByField}
        >
          <option>title</option>
          <option>weight</option>
          <option>description</option>
          <option>category</option>
        </select>
        <div className="flex flex-wrap ">
          {filteredGoods.length !== 0 ? (
            filteredGoods.map((good) => (
              <Good
                key={good.id}
                id={good.id}
                category={good.category}
                description={good.description}
                title={good.title}
                weight={good.weight}
                setChangeGoodFlag={setChangeGoodFlag}
                setChangeId={setChangeId}
                setAddGoodFlag={setAddGoodFlag}
              />
            ))
          ) : (
            <h1 className="text-[30px] my-[30px] ">Нет товаров</h1>
          )}
          {isAddLoading && (
            <Good
              id=""
              category=""
              description=""
              title=""
              weight=""
              isItemCreating={isAddLoading}
            />
          )}
        </div>
        <button
          onClick={addGoodHandler}
          className="bg-[#3475D2] text-white p-4 rounded-2xl mt-4 mb-4"
        >
          Добавить
        </button>
      </div>
      {addGoodFlag && <AddGoodForm setAddGoodFlag={setAddGoodFlag} />}
      {changeGoodFlag && (
        <ChangeGoodForm
          setChangeGoodFlag={setChangeGoodFlag}
          changeId={changeId}
        />
      )}
    </div>
  );
};

export default GoodsList;
