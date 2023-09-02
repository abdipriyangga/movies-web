import React, { useState } from 'react'
import { registerFields } from '../../constants/formFields'
import Input from '../../components/Input';
import Button from '../../components/Button';

const fields = registerFields;
let fieldState = {};

fields.forEach(field => fieldState[field.id] = '')
const Register = () => {
    const [registerState, setRegisterState] = useState(fieldState);
    const handleChange = (e) => setRegisterState({ ...registerState, [e.target.id]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registerState)
        createAccount()
    }

    //handle Signup API Integration here
    const createAccount = () => {

    }
    return (
        <main className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <section className='bg-slate-50 p-10 rounded shadow max-w-md w-full space-y-8'>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Register your account
                </h2>
                <form className="mt-8 space-y-6">
                    <section className="space-y-6">
                        {fields.map((field) => {
                            return (
                                <Input
                                    key={field.id}
                                    handleChange={handleChange}
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
                        })}
                    </section>
                    <Button handleSubmit={handleSubmit} text="Register" />
                </form>
            </section>
        </main>
    )
}

export default Register