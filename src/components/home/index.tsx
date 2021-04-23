import React, {useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as RequestAction from 'store/actions/request.action'
import { requestSelector } from 'store/reducers/request.reducer';
import { SourceConfig, MigrationConfig, TargetConfig } from 'store/types/form.types';
import { Loader } from 'components/shared';
// @ts-ignore
export const Home = () => {
    const sourceConfig = {"username": "",
        "host": "",
        "port": "",
        "database": "",
        "password": "",
        "schema_list": [],
    }
    const targetConfig = {"username": "",
        "host": "",
        "port": "",
        "database": "",
        "password": "",
    }
    const migrationConfig = {"load_type": "full",
        "trialrun": false,
        "batchsize": 1000,
        "logged": false,
        "multiprocess": true,
        "processes": 1,
    }

    const formConfigData = {
        SourceConfiguration: SourceConfig,
        TargetConfiguration: TargetConfig,
        MigrationConfiguration: MigrationConfig,
    }
    const [allConfigData, setAllConfigData] = useState<any>({
        SourceConfiguration: sourceConfig,
        TargetConfiguration: targetConfig,
        MigrationConfiguration: migrationConfig})
    const [thankYouPage, setThankYouPage] = useState(false)
    const dispatch = useDispatch()
    const [responseError, setResponseError] = useState("");
    const onSubmit =()=> {
        dispatch(RequestAction.formRequest(allConfigData, (response:any, err:any)=>{
            if(err){
                setResponseError(err.data.message);
            }else{
                setThankYouPage(true)
            }
        }));
    };

    const onDataChangeEvent = (configKey:string, key:string, val:any) => {
        setAllConfigData((allConfigData:any) => ({
            ...allConfigData, [configKey]: {
                ...allConfigData[configKey], [key]: val
            }
        }))
    }
    const { isLoading: isRequestLoading } = useSelector(requestSelector)
    return(
        <div>
            <div className="form-wrapper">
                <div className="form-constant">
                    <p className="up-txt">{thankYouPage ? 'Thank You' : 'Migrate Your Database'} </p>
                    {responseError &&
                        <div className="error_help_container">
                            <div className="error_help_txt">
                                <span className="error_txt2">{responseError}</span>
                            </div>
                        </div>
                    }
                    <div className="form-input-wrapper">
                        {!thankYouPage &&
                            <form onSubmit={() => {onSubmit()}}>
                                {Object.keys(formConfigData).map(function (configName, index) {
                                    // @ts-ignore
                                    const configData = formConfigData[configName]
                                    return (<div className='row configuration-box' key={configName}>

                                        <h3>{configName}</h3>
                                        {Object.keys(configData).map(function (keyName, keyIndex) {
                                            // @ts-ignore
                                            const value = configData[keyName]
                                            return (
                                                <div className='col-2' key={configData + keyName}>
                                                    <h4>{value.name}</h4>
                                                    <div className="key-search-box">
                                                    <span className="search-box">
                                                        {(value.type === 'text' || value.type === 'integer') &&
                                                        <input type="text"
                                                               onKeyPress={(event) => {
                                                                   if ((value.type === 'integer') && (!/[0-9]/.test(event.key)))
                                                                       event.preventDefault();
                                                               }}
                                                               onChange={(e) => {
                                                                   onDataChangeEvent(configName, keyName, e.target.value);
                                                                   setResponseError('')
                                                               }}
                                                               placeholder={value.placeholder}
                                                               value={allConfigData[configName][keyName]}
                                                               required={value.required}
                                                        />}
                                                        {value.type === 'select' &&
                                                        <select value={allConfigData[configName][keyName]}
                                                                onChange={(e) => {
                                                                    onDataChangeEvent(configName, keyName, e.target.value);
                                                                    setResponseError('')
                                                                }}>
                                                            {value.options.map((name: string, i: number) => {
                                                                return (<option value={name}
                                                                                key={value.name + name}>{name.toString()}</option>)
                                                            })}
                                                        </select>
                                                        }
                                                    </span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>)
                                })}
                                <div className="submit-btn-div">
                                    <button type='button' className="app-btn"
                                            onClick={() => {
                                                onSubmit()
                                            }}>SUBMIT
                                    </button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
            {isRequestLoading && <Loader />}
        </div>
    )
}