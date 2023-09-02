import React from 'react'

const Button = ({ handleSubmit, type = 'Button', action = 'submit', text }) => {
    return (
        <>
            {
                type === 'Button' ? (
                    <button
                        type={action}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-syk-500 mt-10"
                        onSubmit={handleSubmit}
                    >
                        {text}
                    </button>
                ) : (
                    <></>
                )
            }
        </>
    )
}

export default Button