import { api, paths } from '../apis'
export const REQUEST_LOADING = 'REQUEST_LOADING' as const;
export const REQUEST_LOADED = 'REQUEST_LOADED' as const;
export const REQUEST_LOADING_FAILED = 'REQUEST_LOADING_FAILED' as const;

const requestLoading = () => ({
    type: REQUEST_LOADING
})

const requestLoaded = (response: any) => ({
    type: REQUEST_LOADED,
    payload: response
})

const requestLoadingFailed = (response: any, err: string) => ({
    type: REQUEST_LOADING_FAILED,
    payload: response,
    err
})

export type Actions =
    | ReturnType<typeof requestLoading>
    | ReturnType<typeof requestLoaded>
    | ReturnType<typeof requestLoadingFailed>

export const formRequest = (formData: any, callback?: (res:any, err:any) => void): any => (dispatch:any) => {
    dispatch(requestLoading());
    api.post(paths.formRequest, {payload: formData}, {})(dispatch)
        .then(res => {
            dispatch(requestLoaded(res));
            callback&&callback(res, null);
        })
        .catch(err => {
            if(!err){ err = {data: {message: "No response from server."}, message: "No response from server."}}
            dispatch(requestLoadingFailed(formData, err.message))
            callback&&callback(null, err);
        })
}