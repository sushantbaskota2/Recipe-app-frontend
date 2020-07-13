import React from 'react';
import './css/Landing.scss';
import history from '../history';
const Landing = () => {
    return (
        <div className='landinghero'>
            <span>Recipe Binder</span>
            <button
                onClick={() => {
                    history.push('/recipes');
                }}
            >
                Search Recipes
            </button>
        </div>
    );
};

export default Landing;
