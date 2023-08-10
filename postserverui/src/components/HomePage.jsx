// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar/Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className='flex w-full justify-center items-center mt-12'>
                <img className=' w-[600px]' src='home.svg' alt='home' />
                <form>

                </form>
            </div>

        </div>
    );
}

export default HomePage;
