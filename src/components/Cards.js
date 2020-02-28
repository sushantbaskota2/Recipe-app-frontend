import React from 'react';
import '../cards.scss';
const Cards = (props) => {
    return (
        <div className='wrapper'>
            <div className='contain'>
                <img
                    className='top'
                    src={
                        props.recipe.image ? (
                            props.recipe.image
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
                            <p />
                        </div>
                        <div className='buy' style={{ paddingTop: '25px', paddingLeft: '10px' }}>
                            {props.recipe.readyInMinutes} min
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
                    <i class='material-icons'>add_shopping_cart</i>
                </div>
                <div className='contents' style={{ display: 'block', marginTop: '20px' }}>
                    <div>
                        <span className='insideTitle'>Servings:</span> {props.recipe.servings}
                    </div>
                    <div>
                        <span className='insideTitle'>Ingredients:</span>
                        {props.recipe.extendedIngredients.map((ingredient, i) => {
                            return (
                                <span>
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
