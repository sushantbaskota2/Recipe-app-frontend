import React, { useState, useEffect } from 'react';
import './css/Nav.css';
import axios from 'axios';
import auth from '../auth';
import { Link } from 'react-router-dom';
import history from '../history';

const logout = async () => {
    const token = localStorage.getItem('jwtToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log(token);

    try {
        const user = await axios.post('http://localhost:3000/users/logout', {}, config);
        history.push('/logout');
        console.log(user);
    } catch (e) {
        console.log(e);
    }
};

const Navbar = () => {
    const [ user, setUser ] = useState();
    useEffect(() => {
        (async () => {
            const user = await auth();
            setUser(user);
        })();
    }, user);
    console.log(user);

    return (
        <div className='header'>
            <div className='nav-container'>
                <div id='logo' />
                <ul className='nav'>
                    <li>
                        <Link to='/'>Recipes</Link>
                    </li>
                    {user ? (
                        <React.Fragment>
                            <li>
                                <Link to='/profile'>Profile</Link>
                            </li>
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        </React.Fragment>
                    ) : (
                        ''
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
