import { http } from "../../helpers/http";
import Swal from "sweetalert2";
const { REACT_APP_URL: URL } = process.env;

const toggleAuth = () => {
    return {
        type: "AUTH_TOGGLE"
    };
};

const authLogin = (username, password) => {
    return async (dispatch) => {
        const form = new URLSearchParams();
        form.append("username", username);
        form.append("password", password);
        try {
            const { data } = await http().post(`${URL}/auth/login`, form.toString());
            dispatch({
                type: "AUTH_LOGIN",
                payload: data.results.token
            });
            Swal.fire({
                icon: "success",
                title: "Yeay...",
                text: data.message,
                timer: 2000
            });
        }
        catch (err) {
            dispatch({
                type: "AUTH_LOGIN_FAILED",
                payload: err.response.data.message
            });
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response.data.message,
            });
        }
    };
};

const authRegister = (username, fullname, password, confirmPassword) => {
    return async (dispatch) => {
        const form = new URLSearchParams();
        form.append("username", username);
        form.append("fullname", fullname);
        form.append("password", password);
        form.append("confirmPassword", confirmPassword);
        try {
            const { data } = await http().post(`${URL}/auth/register`, form.toString());
            dispatch({
                type: "AUTH_REGISTER",
                payload: Swal.fire({
                    icon: "success",
                    title: "Yeay...",
                    text: data.message,
                    timer: 2000
                })
            });
        }
        catch (err) {
            dispatch({
                type: "AUTH_REGISTER_FAILED",
                payload: Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.response.data.message,
                    timer: 2000
                })
            });
        }
    };
};
const authLogout = () => {
    return async (dispatch) => {
        dispatch({ type: "SET_AUTH_LOGOUT" });
        dispatch({ type: "SET_CLEAR_HISTORY" });
        dispatch({ type: "CLEAR_CHAT" });
    };
};
export { toggleAuth, authLogin, authLogout, authRegister };