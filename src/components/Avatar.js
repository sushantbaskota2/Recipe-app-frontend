import React, { useState, useEffect } from 'react';
import './css/Avatar.css';
import { connect } from 'react-redux';
import history from '../history';
import axios from 'axios';
import auth from '../auth';
import { setUser } from '../actions/';

const Avatar = (props) => {
    const [ avatar, setAvatar ] = useState(
        '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'
    );

    const [ file, setFile ] = useState();

    const fileChange = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];

        formData.append('avatar', file, file.name);

        const { data } = await axios.post('http://localhost:3000/users/me/avatar', formData, {
            headers: {
                Authorization: `Bearer ${props.user.token}`
            }
        });
        console.log(data);

        setFile(data);
        props.setUser();
    };

    useEffect(
        () => {
            (async () => {
                if (!props.user.token) {
                    return;
                }
                const res = await axios.get(`http://localhost:3000/users/me/avatar`, {
                    headers: {
                        Authorization: `Bearer ${props.user.token}`
                    }
                });

                if (res.data.avatar) {
                    setAvatar(Buffer.from(res.data.avatar).toString('base64'));
                }
            })();
        },
        [ avatar, file, props.user ]
    );

    return (
        <div
            className='avatar-upload'
            onClick={() => {
                if (!props.uploada) {
                    history.push('/profile');
                }
            }}
        >
            <div className='avatar-edit'>
                {props.uploada ? (
                    <React.Fragment>
                        <input type='file' id='imageUpload' accept='.png, .jpg, .jpeg' onChange={fileChange} />
                        <label for='imageUpload' className='fa fa-edit uploadicon' />
                    </React.Fragment>
                ) : (
                    ''
                )}
            </div>
            <div className='avatar-preview'>
                <img id='imagePreview' src={`data:image/png;base64,${avatar}`} />
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, { setUser })(Avatar);
