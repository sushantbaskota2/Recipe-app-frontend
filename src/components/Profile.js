import React, { useState, useEffect } from 'react';
import './css/Profile.css';
import auth from '../auth';
const Profile = () => {
    const [ user, setUser ] = useState();
    useEffect(() => {
        (async () => {
            const user = await auth();
            setUser(user);
        })();
    }, user);
    if (user) {
        return (
            <div class='profilecontainer' style={{ marginTop: '15%' }}>
                <div class='profile card'>
                    <img
                        class='profile image'
                        src='https://images.unsplash.com/photo-1486044938437-01b06ad8098d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        alt='Profile'
                    />
                    <p class='profile name'>{user.data.name}</p>
                    <p class='profile bio'>{user.data.email}</p>

                    <div class='stats'>
                        <div class='stat'>
                            <p class='number'>Jan 2020</p>
                            <p class='title'>Member Since</p>
                        </div>
                        <div class='stat'>
                            <p class='number'>24</p>
                            <p class='title'>Recipes</p>
                        </div>
                    </div>

                    <div class='buttons'>
                        <button>Edit</button>
                        <button>Recipes</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return '';
    }
};

export default Profile;
