import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import IngredientsAdd from './IngredientsAdd';
import './css/fridge.css';
import './css/fridge.scss';
import axios from 'axios';
import Loading from './Loading';
class Fridge extends React.Component {
    state = { fridge: [], loading: true, ingName: '', token: '' };

    async componentDidMount() {
        const token = await localStorage.getItem('jwtToken');
        this.setState({ token });
        const fridge = await axios.get('http://localhost:3000/users/fridge', {
            headers: {
                Authorization: `Bearer ${this.state.token}`
            }
        });
        console.log(fridge.data);

        this.setState({ fridge: fridge.data.fridge });
    }
    async componentDidUpdate() {
        console.log('update vayo');
        if (this.state.loading) {
            const fridge = await axios.get('http://localhost:3000/users/fridge', {
                headers: {
                    Authorization: `Bearer ${this.state.token}`
                }
            });

            if (this.state.fridge !== fridge.data.fridge) {
                this.setState({ fridge: fridge.data.fridge, loading: false });
            }
        }
    }

    render() {
        return (
            <div class='ing-container'>
                <div class='ing-store'>
                    <span class='title'>Add to Fridge</span>
                    <div class='ing-content'>
                        <div class='nawrapper'>
                            <div class='add-item'>
                                <div class='plus-icon'>
                                    <i class='fa fa-plus' />
                                </div>
                                <input
                                    type='text'
                                    placeholder='Add new items'
                                    onChange={(e) => {
                                        this.setState({ ingName: e.target.value });
                                    }}
                                    value={this.state.ingName}
                                />
                            </div>
                        </div>
                        <button
                            onClick={async (e) => {
                                e.preventDefault();
                                console.log(this.state.token);

                                const res = await axios.post(
                                    'http://localhost:3000/users/fridge',
                                    { ingName: this.state.ingName },
                                    {
                                        headers: {
                                            Authorization: `Bearer ${this.state.token}`
                                        }
                                    }
                                );
                                console.log(res);

                                this.setState({ ingName: '', loading: true });
                            }}
                            style={{ color: 'black', width: 'fitContent' }}
                        >
                            Add Ingredient
                        </button>
                    </div>
                </div>

                <div class='ing-fridge'>
                    <span class='title'>Ingredients in My Fridge</span>
                    {!this.state.loading ? (
                        <div class='ing-content'>
                            <div style={{ padding: '25px' }}>
                                {this.state.fridge.length > 0 ? (
                                    this.state.fridge.map((rec) => (
                                        <div className='item'>
                                            {rec.ingName}{' '}
                                            <i
                                                className='fa fa-close'
                                                style={{ float: 'right' }}
                                                onClick={async (e) => {
                                                    const res = await axios.delete(
                                                        `http://localhost:3000/users/fridge/${rec._id}`,
                                                        {
                                                            headers: {
                                                                Authorization: `Bearer ${this.state.token}`
                                                            }
                                                        }
                                                    );
                                                    console.log(res);

                                                    this.setState({ loading: true });
                                                }}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    'No items in the fridge'
                                )}
                            </div>
                        </div>
                    ) : (
                        <div style={{ marginLeft: '200px' }}>
                            <Loading />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Fridge);
// <span
//     style={{ zIndex: '1000' }}
//     class='text'
//     onClick={async (e) => {
//         e.preventDefault();
//         console.log('hello');
//         await axios.post(
//             'http://localhost:3000/users/fridge',
//             { ingName: this.state.ingName },
//             {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
//                 }
//             }
//         );

//         this.setState({ ingName: '' });
//     }}
// >
//     Add
// </span>;
