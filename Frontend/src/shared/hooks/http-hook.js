import { useCallback, useEffect, useRef, useState } from "react";

export const useHttpClient = () => {
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState();
    const activeHttpRequests = useRef([]);
    const sendRequest = useCallback( async (url,method="GET",body=null,headers={}) => {
        setisLoading(true);
        const httpAbortCtrll = new AbortController();
        activeHttpRequests.current.push(httpAbortCtrll);
        try{
            const response = await fetch(url,{
                method,
                body,
                headers,
                signal: httpAbortCtrll.signal
            });
            const responseData = await response.json();
            if(!response.ok){
                throw new Error(responseData.message);
            }
            return responseData;
        } catch(err) {
            setError(err);
        }
        setisLoading(false);
    },[]);

    const clearError = () => {
        setError(null);
    }

    useEffect(()=>{
        return () => {
            activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
        }
    },[]);
    return {isLoading,error,sendRequest,clearError};
};