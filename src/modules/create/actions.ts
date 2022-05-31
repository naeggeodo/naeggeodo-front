import { createAction } from 'typesafe-actions';
import { OrderTimeType } from './types';

const namespace = 'create/';

export const SELECT_ORDER_TIME_TYPE = namespace + 'SELECT_ORDER_TIME_TYPE';
export const INSERT_TITLE = namespace + 'INSERT_TITLE';
export const INSERT_LINK = namespace + 'INSERT_LINK';
export const PLUS_MAX_COUNT = namespace + 'PLUS_MAX_COUNT';
export const MINUS_MAX_COUNT = namespace + 'MINUS_MAX_COUNT';
export const ADD_TAG = namespace + 'ADD_TAG';
export const REMOVE_TAG = namespace + 'REMOVE_TAG';

export const selectOrderTimeType = createAction(
  SELECT_ORDER_TIME_TYPE,
  (orderTimeType: OrderTimeType) => ({ orderTimeType }),
)();

export const insertTitle = createAction(INSERT_TITLE, (title: string) => ({
  title,
}))();

export const insertLink = createAction(INSERT_LINK, (link: string) => ({
  link,
}))();

export const plusMaxCount = createAction(PLUS_MAX_COUNT, () => ({}))();
export const minusMaxCount = createAction(MINUS_MAX_COUNT, () => ({}))();
export const addTag = createAction(ADD_TAG, (keyword) => keyword)();
export const removeTag = createAction(REMOVE_TAG, (index) => index)();
