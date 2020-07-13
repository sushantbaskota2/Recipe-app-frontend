import React from 'react';
import { connect } from 'react-redux';
import './Login.css';
import axios from '../axios';
import { setUser } from '../actions/index';
import history from '../history';
import Alert from './Alert';

class Login extends React.Component {
    state = {
        clicked: false,
        email: '',
        password: '',
        name: '',
        alert: ''
    };

    toggle = () => {
        this.setState({
            ...this.state,
            clicked: !this.state.clicked
        });
    };

    login = async (e) => {
        console.log('Thichyo');
        e.preventDefault();
        try {
            const user = await axios.post('/users/login', {
                email: this.state.email,
                password: this.state.password
            });
            if (user.status === 200) {
                localStorage.setItem('jwtToken', user.data.token);
                this.props.setUser();
                history.push('/recipes');
                window.location.reload();
            }

            console.log(user);
        } catch (e) {
            console.log(e);
        }
    };
    signUp = async (e) => {
        e.preventDefault();
        try {
            const user = await axios.post('/users', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            });
            if (user) {
                console.log(user);
                this.setState({ alert: 'Account created successfully. You can now login' });
            }
        } catch (e) {
            this.setState({ alert: 'Something went wrong try again' });
            console.log(e.message);
        }
    };

    onChangeEmail = async (e) => {
        this.setState({ email: e.target.value });
    };
    onChangesignUpName = async (e) => {
        this.setState({ name: e.target.value });
    };
    onChangePassword = async (e) => {
        this.setState({ password: e.target.value });
    };

    componentDidUpdate() {
        if (this.state.alert !== '') {
            setTimeout(() => {
                this.setState({ alert: '' });
            }, 10000);
        }
    }

    render() {
        return (
            <div className='login-body' style={this.props.style}>
                {this.state.alert !== '' ? <Alert message={this.state.alert} type={'success'} /> : ''}
                <h2>Welcome to our recipe app!</h2>
                <div className={`login-container ${this.state.clicked ? 'right-panel-active' : ''}`} id='container'>
                    <div className='form-container sign-up-container'>
                        <form action='#' className='login-form' onSubmit={this.signUp}>
                            <h1>Create Account</h1>

                            <span>Use your email for registration</span>
                            <input
                                type='text'
                                value={this.state.name}
                                onChange={this.onChangesignUpName}
                                placeholder='Name'
                            />
                            <input
                                onChange={this.onChangeEmail}
                                type='email'
                                value={this.state.email}
                                placeholder='Email'
                            />
                            <input
                                onChange={this.onChangePassword}
                                type='password'
                                value={this.state.password}
                                placeholder='Password'
                            />
                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                    <div className='form-container sign-in-container'>
                        <form className='login-form' action='#'>
                            <h1>Sign in</h1>

                            <span>Use your email for registration</span>
                            <input
                                onChange={this.onChangeEmail}
                                type='email'
                                value={this.state.email}
                                placeholder='Email'
                            />
                            <input
                                onChange={this.onChangePassword}
                                type='password'
                                value={this.state.password}
                                placeholder='Password'
                            />
                            <a className='logina' href='#'>
                                Forgot your password?
                            </a>
                            <button onClick={this.login}>Sign In</button>
                        </form>
                    </div>
                    <div className='overlay-container'>
                        <div className='overlay'>
                            <div className='overlay-panel overlay-left'>
                                <h1>Welcome Back!</h1>
                                <p>Login to your personal recipe binder.</p>
                                <button className='ghost' id='signIn' onClick={this.toggle}>
                                    Sign In
                                </button>
                            </div>
                            <div className='overlay-panel overlay-right'>
                                <h1>Hello, Friend!</h1>
                                <p>Start your journey to custom recipes.</p>
                                <button className='ghost' id='signUp' onClick={this.toggle}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { setUser })(Login);
