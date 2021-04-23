import { Reducer } from 'redux';
import * as ActionTypes from 'store/types/request.types';
import { Actions } from 'store/actions/request.action';
import { RootReducerType } from './index';

export type State = {
    isLoading: boolean;
    err: null | undefined | string;
    formDetails: any;
};

const initialState = {
    isLoading: false,
    err: null,
    formDetails: null
};

const requestReducer: Reducer<State, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_LOADING:
            return { ...state, isLoading: true, err: null };
        case ActionTypes.REQUEST_LOADED:
            return { ...state, isLoading: false, formDetails: action.payload};
        case ActionTypes.REQUEST_LOADING_FAILED:
            return { ...state, isLoading: false, formDetails: action.payload, err: action.err };
        default:
            return state;
    }
};

export const requestSelector = (state: RootReducerType) => state.request
export default requestReducer;
