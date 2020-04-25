import React, { useState, useEffect } from 'react';
import './css/Nav.css';
import axios from 'axios';
import auth from '../auth';
import { Link } from 'react-router-dom';
import history from '../history';
import Avatar from './Avatar';
import { connect } from 'react-redux';
import { setUser } from '../actions';

const Navbar = (props) => {
    const [ user, setUser ] = useState({});
    useEffect(
        () => {
            (async () => {
                const user = await auth();
                setUser(user);
            })();
        },
        [ props.user ]
    );

    const logout = async () => {
        const token = localStorage.getItem('jwtToken');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        console.log(token);

        try {
            const user = await axios.post('http://localhost:3000/users/logout', {}, config);
            history.push('/login');
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='header'>
            <div className='nav-container'>
                <div id='logo'>
                    <h1 className='titleSpan'>Food at Home</h1>
                </div>
                <ul className='nav'>
                    <li>
                        <Link to='/recipes'>Recipes</Link>
                    </li>

                    {props.user ? (
                        <React.Fragment>
                            <li>
                                <Link to='/user/recipes'>My Recipes</Link>
                            </li>
                            <li>
                                <Link to='/user/favorites'>Favorites</Link>
                            </li>
                            <li>
                                <Link to='/user/fridge'>My Fridge</Link>
                            </li>
                            <li>
                                <Avatar />
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

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, { setUser })(Navbar);
