import React, { useEffect, useState } from 'react'
import { registerFields } from '../../constants/formFields'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { toggleAuth, authRegister } from "../../redux/actions/auth";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

const fields = registerFields;
let fieldState = {};

fields.forEach(field => fieldState[field.id] = '')
const Register = (props) => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [registerState, setRegisterState] = useState(fieldState);
    const handleChange = (e) => setRegisterState({ ...registerState, [e.target.id]: e.target.value });

    const handleChangeUsername = (e) => {
        setRegisterState({ ...registerState, [e.target.id]: e.target.value })
        setUsername(e.target.value)
    }
    const handleChangeFullname = (e) => {
        setRegisterState({ ...registerState, [e.target.id]: e.target.value })
        setFullname(e.target.value)
    }
    const handleChangePassword = (e) => {
        setRegisterState({ ...registerState, [e.target.id]: e.target.value })
        setPassword(e.target.value)
    }
    const handleChangeConfirmPassword = (e) => {
        setRegisterState({ ...registerState, [e.target.id]: e.target.value })
        setConfirmPassword(e.target.value)
    }
    let { isRegister } = props.auth;
    console.log('regis', props.auth)
    const handleSubmit = (e) => {
        e.preventDefault();
        props.authRegister(username, fullname, password, confirmPassword);
        if (!isRegister) {
            navigate('/');
            console.log("is register", isRegister);
        }
    }
    useEffect(() => {
        props.toggleAuth();
    }, []);
    return (
        <main className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <section className='bg-slate-50 p-10 rounded shadow max-w-md w-full space-y-8'>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Register your account
                </h2>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <section className="space-y-6">
                        {fields.map((field) => {
                            if (field.name === 'username') {
                                return (
                                    <Input
                                        key={field.id}
                                        handleChange={handleChangeUsername}
                                        value={registerState[field.id]}
                                        labelText={field.labelText}
                                        labelFor={field.labelFor}
                                        id={field.id}
                                        name={field.name}
                                        type={field.type}
                                        isRequired={field.isRequired}
                                        placeholder={field.placeholder}
                                    />
                                )
                            }
                            else if (field.name === 'fullname') {
                                return (
                                    <Input
                                        key={field.id}
                                        handleChange={handleChangeFullname}
                                        value={registerState[field.id]}
                                        labelText={field.labelText}
                                        labelFor={field.labelFor}
                                        id={field.id}
                                        name={field.name}
                                        type={field.type}
                                        isRequired={field.isRequired}
                                        placeholder={field.placeholder}
                                    />
                                )
                            }
                            else if (field.name === 'password') {
                                return (
                                    <Input
                                        key={field.id}
                                        handleChange={handleChangePassword}
                                        value={registerState[field.id]}
                                        labelText={field.labelText}
                                        labelFor={field.labelFor}
                                        id={field.id}
                                        name={field.name}
                                        type={field.type}
                                        isRequired={field.isRequired}
                                        placeholder={field.placeholder}
                                    />
                                )
                            }
                            else if (field.name === 'confirm-password') {
                                return (
                                    <Input
                                        key={field.id}
                                        handleChange={handleChangeConfirmPassword}
                                        value={registerState[field.id]}
                                        labelText={field.labelText}
                                        labelFor={field.labelFor}
                                        id={field.id}
                                        name={field.name}
                                        type={field.type}
                                        isRequired={field.isRequired}
                                        placeholder={field.placeholder}
                                    />
                                )
                            }
                        })}
                    </section>
                    <Button handleSubmit={handleSubmit} text="Register" />
                </form>
            </section>
        </main>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});
const mapDispatchToProps = { toggleAuth, authRegister };
export default connect(mapStateToProps, mapDispatchToProps)(Register);