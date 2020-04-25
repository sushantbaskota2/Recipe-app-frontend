import React from 'react';
import './css/IngredientsAdd.scss';
import IngredientSearch from './IngredientSearch';
class IngredientsAdd extends React.Component {
    state = {
        ingredients: []
    };

    render() {
        return (
            <div style={{ display: 'block', position: 'relative' }}>
                <IngredientSearch />

                <ul className='ingul'>
                    <li className='ingli {&#39;fadeOut&#39; : skill.done}'>
                        <span className='fa fa-close' />
                        <span> k xa sathi</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default IngredientsAdd;
