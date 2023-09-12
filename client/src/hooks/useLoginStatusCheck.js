import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { setLogin } from "../actions";

export const useLoginStatusCheck = (setLoginStatus) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (Cookies.get("jwtoken")) {
            dispatch(setLogin(true));
            setLoginStatus(true);
        }
        else {
            dispatch(setLogin(false));
            setLoginStatus(false);
        }
    }, []);
}