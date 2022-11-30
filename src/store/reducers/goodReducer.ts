import {
  goodAction,
  GoodsActionTypes,
  goodState,
  IGoods,
} from "../../types/goods";

const initialState: goodState = {
  goods: [] as IGoods[],
  isLoading: false,
  isError: null,
  isAddLoading: false,
  isAddError: null,
  isDeleteLoading: false,
  isDeleteError: null,
  isChangeLoading: false,
  isChangeError: null,
  currentID: null,
};

export const goodReducer = (
  state = initialState,
  action: goodAction
): goodState => {
  switch (action.type) {
    case GoodsActionTypes.FETCH_GOODS:
      return { isLoading: true, isError: null, goods: state.goods };
    case GoodsActionTypes.FETCH_GOODS_SUCCESS:
      return { isLoading: false, isError: null, goods: action.payload };
    case GoodsActionTypes.FETCH_GOODS_ERROR:
      return { isLoading: false, isError: action.payload, goods: state.goods };
    case GoodsActionTypes.ADD_GOODS:
      return {
        isLoading: false,
        isAddLoading: true,
        isError: null,
        isAddError: null,
        goods: state.goods,
      };
    case GoodsActionTypes.ADD_GOODS_SUCCESS:
      return {
        isLoading: false,
        isAddLoading: false,
        isError: null,
        isAddError: null,
        goods: [...state.goods, action.payload],
      };
    case GoodsActionTypes.ADD_GOODS_ERROR:
      return {
        isLoading: false,
        isAddLoading: true,
        isError: null,
        isAddError: action.payload,
        goods: state.goods,
      };
    case GoodsActionTypes.DELETE_GOODS:
      return {
        isLoading: false,
        isDeleteLoading: true,
        isError: null,
        isDeleteError: null,
        currentID: action.payload,
        goods: state.goods,
      };
    case GoodsActionTypes.DELETE_GOODS_SUCCESS:
      return {
        isLoading: false,
        isDeleteLoading: false,
        isError: null,
        isDeleteError: null,
        goods: state.goods.filter((good) => good.id !== action.payload),
      };
    case GoodsActionTypes.DELETE_GOODS_ERROR:
      return {
        isLoading: false,
        isDeleteLoading: false,
        isError: null,
        isDeleteError: action.payload,
        goods: state.goods,
      };
    case GoodsActionTypes.CHANGE_GOODS:
      return {
        isLoading: false,
        isError: null,
        isChangeLoading: true,
        currentID: action.payload,
        goods: state.goods,
      };
    case GoodsActionTypes.CHANGE_GOODS_SUCCESS:
      return {
        isLoading: false,
        isError: null,
        isChangeLoading: false,
        goods: state.goods.map((good) =>
          good.id === action.payload.id ? action.payload : good
        ),
      };
    case GoodsActionTypes.CHANGE_GOODS_ERROR:
      return {
        isLoading: false,
        isError: null,
        isChangeLoading: false,
        goods: state.goods,
      };
    default:
      return state;
  }
};
