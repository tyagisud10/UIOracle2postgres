import { combineReducers } from 'redux';
import request from 'store/reducers/request.reducer';
import common from 'store/reducers/common.reducer';

export const getReducers = () =>
    combineReducers({
        request,
        common
    });

export type RootReducerType = ReturnType<ReturnType<typeof getReducers>>;