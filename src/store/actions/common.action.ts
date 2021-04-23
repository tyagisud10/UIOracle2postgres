import { ThunkAction } from 'redux-thunk';
import { State } from 'store/reducers/common.reducer';
import * as ActionTypes from 'store/types/common.types';

const updateLoader = (isLoading: boolean, loadingText?: string) => ({
    type: ActionTypes.LOADER_UPDATE,
    isLoading,
    loadingText,
});

export type Actions =
    | ReturnType<typeof updateLoader>;

type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>;

export const loader = (isLoading: boolean, loadingText?: string): ThunkResult<void> => dispatch => {
    dispatch(updateLoader(isLoading, loadingText));
};