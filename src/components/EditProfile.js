import React from 'react';
import './css/EditProfile.scss';
import { setUser } from '../actions/index';
import auth from '../auth/index';
import Loading from './Loading';
import Avatar from './Avatar';
import axios from 'axios';
import { connect } from 'react-redux';

class EditProfile extends React.Component {
    state = {
        user: null,
        loading: true,
        avatar: null
    };
    async componentDidMount() {
        const { data } = await auth();
        console.log(data);

        if (data) {
            const { dataA } = await axios.get('http://localhost:3000/users/me/avatar', {
                headers: {
                    Authorization: `Bearer ${data.token}`
                }
            });

            console.log(dataA);

            this.setState({ user: data, loading: false, avatar: dataA ? dataA : '' });
        }
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }
        return (
            <div>
                <div className='edit-container'>
                    <div id='yologo'>
                        <h1 className='yologo edith1'>lllll</h1>
                        <div className='CTA'>
                            <h1 className='edith1'>Profile</h1>
                        </div>
                    </div>
                    <div className='leftbox'>
                        <nav className='profnav'>
                            <a id='profileic' className='active'>
                                <i className='fa fa-user' />
                            </a>
                        </nav>
                    </div>
                    <div className='rightbox'>
                        <div className='profile'>
                            <h1 className='edith1'>Personal Info</h1>
                            <h2 className='edith2'>Full Name</h2>
                            <input
                                className='heri'
                                value={this.state.user.name}
                                disabled
                                style={{ cursor: 'not-allowed' }}
                            />
                            <h2 className='edith2'>Email</h2>
                            <input
                                className='heri'
                                style={{ cursor: 'not-allowed' }}
                                value={this.state.user.email}
                                disabled
                            />
                            <h2 className='edith2'>Password </h2>
                            <input className='heri' value={'****************'} />
                            <span className='fa fa-edit spana' style={{ fontSize: '15px' }} />
                            <h2 className='edith2' style={{ float: 'left' }}>
                                Upload
                            </h2>
                            <div style={{ marginRight: '500px', width: '50px', height: '50px' }}>
                                <Avatar uploada={true} avatar={this.state.avatar} />
                            </div>
                            <br />
                            <input className='editSubmit' type='button' value='Submit' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { setUser })(EditProfile);
