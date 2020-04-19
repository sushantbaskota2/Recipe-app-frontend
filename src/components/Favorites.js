import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import history from '../history';
import Modal from './Modal';
import Cards from './Cards';

const Favorites = (props) => {
    const [ favorites, setFavorites ] = useState([]);
    const [ modal, setModal ] = useState(false);
    const [ activeRecipe, setActiveRecipe ] = useState({});

    if (!props.user) {
        history.push('/login');
    }
    useEffect(
        () => {
            (async (token) => {
                const favorites = await axios.get(`https://localhost:3000/users/favorites`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setFavorites(favorites);
            })(props.user.token);

            return favorites;
        },
        [ favorites ]
    );

    if (favorites.length <= 0) {
        return (
            <div>
                <h2>Favorites</h2>
                No favorite Recipes.
            </div>
        );
    } else {
        return (
            <div>
                <h2>Favorites</h2>
                <div style={{ display: 'block' }}>
                    {favorites.map((recipe) => {
                        return (
                            <Cards
                                recipe={recipe}
                                modal={(recipe) => {
                                    setModal(true);
                                    setActiveRecipe(recipe);
                                }}
                                key={recipe._id}
                            />
                        );
                    })}
                </div>
                {modal ? (
                    <Modal
                        modalDismiss={() => {
                            this.setState({ modal: false });
                        }}
                        recipe={this.activeRecipe}
                    />
                ) : (
                    ''
                )}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Favorites);
