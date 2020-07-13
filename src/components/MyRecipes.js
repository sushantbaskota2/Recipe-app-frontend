import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../axios';
import history from '../history';
import Modal from './Modal';
import Cards from './Cards';
import Loading from './Loading';
import auth from '../auth';

class MyRecipes extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        favorites: [],
        user: null,
        modal: false,
        activeRecipe: null,
        loading: true
    };

    async componentDidMount() {
        const user = await auth();
        if (user) {
            console.log(user);

            const favorites = await axios.get(`/users/recipes/`, {
                headers: {
                    Authorization: `Bearer ${user.data.token}`
                }
            });
            this.setState({ user: user.data, loading: false, favorites: favorites.data });
        } else {
            history.push('/login');
        }
    }

    async componentDidUpdate() {
        if (this.state.user) {
            const favorites = await axios.get(`/users/recipes/`, {
                headers: {
                    Authorization: `Bearer ${this.state.user.token}`
                }
            });
            this.setState({ loading: false, favorites: favorites.data });
        }
    }

    // const [ modal, setModal ] = useState(false);
    // const [ activeRecipe, setActiveRecipe ] = useState({});

    // useEffect(
    //     () => {
    //         (async (token) => {
    //             if (!token) {
    //                 return;
    //             }
    //             console.log(token);
    //
    //             if (favorites.error) {
    //                 return;
    //             }
    //             console.log(favorites);

    //             setMyRecipes(favorites);
    //         })(user.token);
    //     },
    //     [ favorites, user ]
    // );
    render() {
        if (this.state.loading) {
            return <Loading />;
        } else if (this.state.favorites.length <= 0) {
            return (
                <div style={{ marginTop: '10%', display: 'block' }}>
                    <h2>MyRecipes</h2>
                    No favorite Recipes.
                    <button
                        onClick={(e) => {
                            history.push('/user/recipes/add');
                        }}
                        style={{ position: 'relative' }}
                    >
                        {' '}
                        Add Recipes
                    </button>
                </div>
            );
        } else {
            console.log(this.state.favorites);

            return (
                <div style={{ marginTop: '10%', display: 'block' }}>
                    <h2>My Recipes</h2>
                    <button
                        onClick={(e) => {
                            history.push('/user/recipes/add');
                        }}
                        style={{ position: 'absolute', justifyContent: 'left' }}
                    >
                        {' '}
                        Add Recipes
                    </button>
                    <div style={{ display: 'flex', float: 'left' }}>
                        {this.state.favorites.map((recipe) => {
                            return (
                                <Cards
                                    recipe={recipe}
                                    modal={(recipe) => {
                                        this.setState({ activeRecipe: recipe, modal: true });
                                    }}
                                    delete
                                    edit
                                    deleteFav={async (id) => {
                                        await axios.delete(`/users/recipes/${id}`, {
                                            headers: {
                                                Authorization: `Bearer ${this.state.user.token}`
                                            }
                                        });
                                        this.setState({ loading: true });
                                    }}
                                    key={recipe._id}
                                />
                            );
                        })}
                    </div>
                    {this.state.modal ? (
                        <Modal
                            modalDismiss={() => {
                                this.setState({ modal: false });
                            }}
                            recipe={this.state.activeRecipe}
                        />
                    ) : (
                        ''
                    )}
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(MyRecipes);
