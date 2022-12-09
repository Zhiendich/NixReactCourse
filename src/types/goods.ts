export interface IGoods {
  id: string;
  title: string;
  weight: string;
  description: string;
  category: string;
  isItemCreating?: boolean;
  setChangeGoodFlag?: React.Dispatch<React.SetStateAction<boolean>>;
  setChangeId?: React.Dispatch<React.SetStateAction<string>>;
  setAddGoodFlag?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface asda {
  isAddLoading: boolean;
  isAddError: null | string;
  isDeleteLoading: boolean;
  isDeleteError: null | string;
  isChangeLoading: boolean;
  isChangeError: null | string;
  currentID: null | string;
}
export interface goodState {
  goods: IGoods[];
  isLoading: boolean;
  isError: null | string;
  isAddLoading?: boolean;
  isAddError?: null | string;
  isDeleteLoading?: boolean;
  isDeleteError?: null | string;
  isChangeLoading?: boolean;
  isChangeError?: null | string;
  currentID?: null | string;
}

export enum GoodsActionTypes {
  FETCH_GOODS = "FETCH_GOODS",
  FETCH_GOODS_SUCCESS = "FETCH_GOODS_SUCCESS",
  FETCH_GOODS_ERROR = "FETCH_GOODS_ERROR",
  ADD_GOODS = "ADD_GOODS",
  ADD_GOODS_SUCCESS = "ADD_GOODS_SUCCESS",
  ADD_GOODS_ERROR = "ADD_GOODS_ERROR",
  DELETE_GOODS = "DELETE_GOODS",
  DELETE_GOODS_SUCCESS = "DELETE_GOODS_SUCCESS",
  DELETE_GOODS_ERROR = "DELETE_GOODS_ERROR",
  CHANGE_GOODS = "CHANGE_GOODS",
  CHANGE_GOODS_SUCCESS = "CHANGE_GOODS_SUCCESS",
  CHANGE_GOODS_ERROR = "CHANGE_GOODS_ERROR",
}

interface FetchGoodsAction {
  type: GoodsActionTypes.FETCH_GOODS;
}

interface FetchGoodsSuccessAction {
  type: GoodsActionTypes.FETCH_GOODS_SUCCESS;
  payload: IGoods[];
}

interface FetchGoodsErrorAction {
  type: GoodsActionTypes.FETCH_GOODS_ERROR;
  payload: string;
}

interface AddGoodsAction {
  type: GoodsActionTypes.ADD_GOODS;
}

interface AddGoodsSuccessAction {
  type: GoodsActionTypes.ADD_GOODS_SUCCESS;
  payload: IGoods;
}

interface AddGoodsErrorAction {
  type: GoodsActionTypes.ADD_GOODS_ERROR;
  payload: string;
}

interface DeleteGoodsAction {
  type: GoodsActionTypes.DELETE_GOODS;
  payload: string;
}

interface DeleteGoodsSuccessAction {
  type: GoodsActionTypes.DELETE_GOODS_SUCCESS;
  payload: string;
}

interface DeleteGoodsErrorAction {
  type: GoodsActionTypes.DELETE_GOODS_ERROR;
  payload: string;
}
interface ChangeGoodsAction {
  type: GoodsActionTypes.CHANGE_GOODS;
  payload: string;
}

interface ChangeGoodsSuccessAction {
  type: GoodsActionTypes.CHANGE_GOODS_SUCCESS;
  payload: IGoods;
}

interface ChangeGoodsErrorAction {
  type: GoodsActionTypes.CHANGE_GOODS_ERROR;
  payload: string;
}

export type goodAction =
  | FetchGoodsAction
  | FetchGoodsSuccessAction
  | FetchGoodsErrorAction
  | AddGoodsAction
  | AddGoodsSuccessAction
  | AddGoodsErrorAction
  | DeleteGoodsAction
  | DeleteGoodsSuccessAction
  | DeleteGoodsErrorAction
  | ChangeGoodsAction
  | ChangeGoodsSuccessAction
  | ChangeGoodsErrorAction;
