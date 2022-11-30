import { GoodsActionTypes, goodAction, IGoods } from "../../types/goods";
import { Dispatch } from "redux";
import axios from "axios";
export const fetchGoods = () => {
  return async (dispatch: Dispatch<goodAction>) => {
    try {
      dispatch({ type: GoodsActionTypes.FETCH_GOODS });
      const response = await axios.get("http://localhost:8080/goods");
      setTimeout(() => {
        dispatch({
          type: GoodsActionTypes.FETCH_GOODS_SUCCESS,
          payload: response.data.goods,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: GoodsActionTypes.FETCH_GOODS_ERROR,
        payload: "Произошла ошибка при загрузке товаров",
      });
    }
  };
};

export const addGoods = (newGood: IGoods) => {
  return async (dispatch: Dispatch<goodAction>) => {
    try {
      dispatch({ type: GoodsActionTypes.ADD_GOODS });
      const response = await axios.post("http://localhost:8080/goods", newGood);
      setTimeout(() => {
        dispatch({
          type: GoodsActionTypes.ADD_GOODS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: GoodsActionTypes.ADD_GOODS_ERROR,
        payload: "Произошла ошибка при добавлении товаров",
      });
    }
  };
};

export const deleteGoods = (id: string) => {
  return async (dispatch: Dispatch<goodAction>) => {
    try {
      dispatch({ type: GoodsActionTypes.DELETE_GOODS, payload: id });
      const response = await axios.delete(`http://localhost:8080/goods/${id}`);
      setTimeout(() => {
        dispatch({
          type: GoodsActionTypes.DELETE_GOODS_SUCCESS,
          payload: response.data.id,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: GoodsActionTypes.DELETE_GOODS_ERROR,
        payload: "Произошла ошибка при удалении товаров",
      });
    }
  };
};

export const changeGoods = (updated: IGoods) => {
  return async (dispatch: Dispatch<goodAction>) => {
    try {
      dispatch({ type: GoodsActionTypes.CHANGE_GOODS, payload: updated.id });
      const response = await axios.put(
        `http://localhost:8080/goods/${updated.id}`,
        updated
      );
      setTimeout(() => {
        dispatch({
          type: GoodsActionTypes.CHANGE_GOODS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: GoodsActionTypes.CHANGE_GOODS_ERROR,
        payload: "Произошла ошибка при изменении товаров",
      });
    }
  };
};
