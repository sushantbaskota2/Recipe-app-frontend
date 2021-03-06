import React from 'react';
import '../cards.scss';
import history from '../history';
const Cards = (props) => {
    return (
        <div className='wrapper' onClick={() => props.modal(props.recipe)}>
            <div className='contain'>
                <img
                    className='top'
                    src={
                        props.recipe.image ? props.recipe.image.includes('spoonacular') ? (
                            props.recipe.image
                        ) : (
                            `data:image/jpeg;base64${props.recipe.image}`
                        ) : (
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwQ7snur7LQOKIbAhBBfjZ0BBFxdtORvRXz8Ed0s_gwK3ssiPu'
                        )
                    }
                    alt={props.recipe.title}
                />
                <div className='bottom'>
                    <div className='left'>
                        <div className='details' style={{ display: 'flex' }}>
                            <h1>{props.recipe.title}</h1>
                            <p style={{ float: 'right' }}>
                                {' '}
                                {props.edit ? (
                                    <i
                                        style={{ textAlign: 'right' }}
                                        className='fas fa-edit'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            history.push(`/user/recipes/edit/${props.recipe._id}`);
                                        }}
                                    />
                                ) : (
                                    ''
                                )}
                            </p>
                        </div>
                        <div
                            className='buy'
                            style={props.delete ? { paddingTop: '10px' } : { paddingTop: '25px', paddingLeft: '10px' }}
                        >
                            {props.delete ? (
                                <React.Fragment>
                                    <i
                                        className='fas fa-trash-alt'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            props.deleteFav(props.recipe._id);
                                        }}
                                    />
                                </React.Fragment>
                            ) : (
                                props.recipe.readyInMinutes + ' min'
                            )}
                        </div>
                    </div>
                    <div className='right'>
                        <div className='done'>
                            <i className='material-icons'>done</i>
                        </div>
                        <div className='details'>
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div className='remove'>
                            <i className='material-icons'>clear</i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inside'>
                <div className='icon'>
                    <i class='fas fa-info-circle' />
                </div>
                <div className='contents' style={{ display: 'block', marginTop: '20px' }}>
                    <div>
                        <span className='insideTitle'>Servings:</span> {props.recipe.servings}
                    </div>
                    <div>
                        <span className='insideTitle'>Ingredients:</span>
                        {props.recipe.extendedIngredients.map((ingredient, i) => {
                            return (
                                <span key={i}>
                                    {i === 0 ? '' : ','}&nbsp;{ingredient.name}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
