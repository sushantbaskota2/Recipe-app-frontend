import React, { useState, useEffect } from 'react';
import './css/Modal.scss';
import ReactDOM from 'react-dom';
import axios from '../axios';
import { connect } from 'react-redux';
import history from '../history';
// const Modal = (props) => {
// return ReactDOM.createPortal(
//         <div
//             onClick={() => {
//                 props.onDismiss();
//             }}
//             className='ui dimmer modals visible active'
//         >
//             <div onClick={(e) => e.stopPropagation()} className='ui standard modal visible active' />
//         </div>,
//         document.querySelector('#modal')
//     );
// };

const Modal = ({ recipe, modalDismiss, user }) => {
    console.log(recipe);
    const [ favs, setFavs ] = useState(false);

    useEffect(
        () => {
            return () => {};
        },
        [ favs ]
    );

    return ReactDOM.createPortal(
        <div
            className='recipe-card-wrapper'
            onClick={() => {
                console.log('bahira');

                modalDismiss();
            }}
        >
            <div onClick={(e) => e.stopPropagation()} className='recipe-card'>
                <aside>
                    <img src={recipe.image} alt={recipe.title} />

                    <a
                        href='#'
                        onClick={async () => {
                            if (!user) {
                                history.push('/login');
                                return;
                            } else {
                                if (favs || user.favorites.includes(recipe._id)) {
                                    await axios.delete(`/users/favorites/${recipe._id}`, {
                                        headers: {
                                            Authorization: `Bearer ${user.token}`
                                        }
                                    });
                                    setFavs(false);
                                    return;
                                } else {
                                    await axios.post(
                                        '/users/favorites',
                                        { recipeID: recipe._id },
                                        {
                                            headers: {
                                                Authorization: `Bearer ${user.token}`
                                            }
                                        }
                                    );
                                    setFavs(true);
                                    console.log('bhayo');
                                }
                            }
                        }}
                        class='button'
                    >
                        {(user && user.favorites.includes(recipe._id)) || favs ? (
                            <span class='fas fa-heart ' />
                        ) : (
                            <span className='far fa-heart ' />
                        )}
                    </a>
                </aside>

                <article>
                    <h2>{recipe.title}</h2>
                    <h3>Serving Size: {recipe.servings}</h3>
                    <ul>
                        <li>
                            <span class='fas fa-dollar-sign' style={{ color: 'blue', fontSize: '15px' }} />
                            <span>{Math.round(recipe.pricePerServing / 5)}</span>
                        </li>
                        <li>
                            <span class='icon icon-clock' />
                            <span>{recipe.readyInMinutes} min</span>
                        </li>

                        <li>
                            <span class='icon icon-calories' />
                            <span>{recipe.nutrients.calories}</span>
                        </li>
                    </ul>

                    <ul className='restrictions'>
                        {Object.keys(recipe.restrictions)
                            .filter((res) => recipe.restrictions[res] === true)
                            .map((res) => <li>{res}</li>)}
                    </ul>
                    <p>
                        <ul class='ingredients restrictions' style={{ marginTop: 0 }}>
                            Ingredients:
                            {recipe.extendedIngredients.map((res) => (
                                <li
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        marginTop: '10px',
                                        fontSize: '10px'
                                    }}
                                >
                                    {res.name}
                                </li>
                            ))}
                        </ul>
                    </p>
                    <p>
                        <h3>Directions:</h3> <br />
                        {recipe.instructions.replace(/(<([^>]+)>)/gi, '').trim()}
                    </p>
                </article>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

const mapStateToProps = (state) => {
    return { user: state.user };
};
export default connect(mapStateToProps)(Modal);
