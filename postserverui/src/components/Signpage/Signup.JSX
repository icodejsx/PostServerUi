/* eslint-disable no-unused-vars */
import React from 'react'

const Signup = () => {
    return (
        <div className='flex'>
            <div className='text-3xl'>
                <p>DigitalPlatform for the Scale of Posts </p>
                <p>am just kidding ok oo </p>
            </div>
            <form>
                <p className='text-3xl font-bold'>SignUp</p>
                <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label>
                    <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

            </form>

        </div>
    )
}

export default Signup
