import React from 'react';

const IngredientSearch = () => {
    return (
        <div>
            <form className='ingForm' onSubmit={() => {}}>
                <input type='text' className='inginput' name='ingredient' required />
                <button className='ingbutton' type='submit'>
                    Add
                </button>
            </form>
        </div>
    );
};

export default IngredientSearch;
