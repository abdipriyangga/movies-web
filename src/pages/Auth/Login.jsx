import React, { useEffect, useState } from 'react'
import { loginFields } from '../../constants/formFields'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { toggleAuth, authLogin } from "../../redux/actions/auth";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';


const fields = loginFields;
let fieldState = {};
fields.forEach(field => fieldState[field.id] = '');

const Login = (props) => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { token } = props.auth;

    const [loginState, setLoginState] = useState(fieldState);
    const handleChangeUsername = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
        setUsername(e.target.value)
    }
    const handleChangePassword = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
        setPassword(e.target.value)
    }
    const isLogin = () => {
        if (token !== null) {
            navigate("/homepage");
        }
    };
    const onLogin = (e) => {
        e.preventDefault();
        props.authLogin(username, password);
    };

    useEffect(() => {
        props.toggleAuth();
        isLogin();
    }, [token]);
    return (
        <main className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <section className='bg-slate-50 p-10 rounded shadow max-w-md w-full space-y-8'>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Login to your account
                </h2>
                <form onSubmit={onLogin} className="mt-8 space-y-6">
                    <section className="-space-y-px">
                        {fields.map((field) => {
                            if (field.name === 'username') {
                                return (
                                    <Input
                                        key={field.id}
                                        handleChange={handleChangeUsername}
                                        value={loginState[field.id]}
                                        labelText={field.labelText}
                                        labelFor={field.labelFor}
                                        id={field.id}
                                        name={field.name}
                                        type={field.type}
                                        isRequired={field.isRequired}
                                        placeholder={field.placeHolder}
                                    />
                                )
                            }
                            else if (field.name === 'password') {
                                return (
                                    <Input
                                        key={field.id}
                                        handleChange={handleChangePassword}
                                        value={loginState[field.id]}
                                        labelText={field.labelText}
                                        labelFor={field.labelFor}
                                        id={field.id}
                                        name={field.name}
                                        type={field.type}
                                        isRequired={field.isRequired}
                                        placeholder={field.placeHolder}
                                    />
                                )
                            }
                        })}
                    </section>
                    <p className="text-center text-sm text-gray-600 mt-5">
                        Don't have an account yet? {' '}
                        <Link to="/register" className="font-medium text-sky-600 hover:text-sky-500">
                            Register
                        </Link>
                    </p>
                    <Button handleSubmit={onLogin} text="Login" />
                </form>
            </section>
        </main>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});
const mapDispatchToProps = { toggleAuth, authLogin };
export default connect(mapStateToProps, mapDispatchToProps)(Login);