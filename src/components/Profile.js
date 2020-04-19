import React, { useState, useEffect } from 'react';
import './css/Profile.css';
import auth from '../auth';
import faker from 'faker';
const Profile = () => {
    const [ user, setUser ] = useState();
    useEffect(() => {
        (async () => {
            const user = await auth();
            setUser(user);
        })();
    }, user);
    const avatar = faker.image.avatar();
    if (user) {
        return (
            <div class='profilecontainer' style={{ marginTop: '15%' }}>
                <div class='profile card'>
                    <img class='profile image' src={avatar} alt='Profile' />
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
