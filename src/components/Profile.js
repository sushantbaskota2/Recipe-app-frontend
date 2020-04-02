import React from 'react';
import './css/Profile.css';
const Profile = () => {
    return (
        <div class='profilecontainer' style={{ marginTop: '15%' }}>
            <div class='profile card'>
                <img
                    class='profile image'
                    src='https://images.unsplash.com/photo-1486044938437-01b06ad8098d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                    alt='Profile'
                />
                <p class='profile name'>Lindsay Frontenac</p>
                <p class='profile bio'>Food at Home User</p>

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
};

export default Profile;
