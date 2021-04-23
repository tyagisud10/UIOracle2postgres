import { Reducer } from 'redux';
import { Actions } from 'store/actions/common.action';
import * as ActionTypes from 'store/types/common.types';
import { RootReducerType } from './index';

export type State = {
    isLoading: boolean;
    loadingText: null | undefined | string;
};

const initialState = {
    isLoading: false,
    loadingText: null,
};

const commonReducer: Reducer<State, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOADER_UPDATE:
            return { ...state, isLoading: action.isLoading, loadingText: action.isLoading ? action.loadingText : null };
        default:
            return state;
    }
};

export const commonSelector = (state: RootReducerType) => state.common
export default commonReducer;
