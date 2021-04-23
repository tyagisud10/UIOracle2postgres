import React from 'react'
import { useSelector } from 'react-redux'
import { commonSelector } from 'store/reducers/common.reducer'

type LoaderProps = {
    autoLoad?: boolean;
    loadingScreen?: boolean;
    loadingText?: string;
}

export const Loader: React.FC<LoaderProps> = ({ autoLoad}) => {
    const { isLoading } = useSelector(commonSelector)

    if (!autoLoad || isLoading)
        return (
            <div className='loader-wrapper'>
                <div className='loader-component'>
                    <div className="lds-ring"><div/><div/><div/><div/></div>
                </div>
            </div>)
    else return null
}