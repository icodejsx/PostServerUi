/* eslint-disable no-unused-vars */
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex p-4 justify-around items-center border border-4'>
            <div className='flex items items-end gap-1 '>
                <p className='text-4xl font-bold color'>My</p>
                <p className='font-bold'>Post</p>
                <p className='text-2xl font-bold'>App</p>
            </div>
            <div>


                <p>Posts</p>
            </div>

            <button>
                Login
            </button>
        </div>
    );
}

export default Navbar;
