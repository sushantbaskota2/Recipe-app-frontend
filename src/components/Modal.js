import React from 'react';
import './css/Modal.scss';
import ReactDOM from 'react-dom';
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

const Modal = ({ recipe, modalDismiss }) => {
    console.log(recipe);

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
                    <img src={recipe.image} alt='Chai Oatmeal' />

                    <a href='#' class='button'>
                        <span class='icon icon-play' />
                    </a>
                </aside>

                <article>
                    <h2>{recipe.title}</h2>
                    <h3>Serving Size: {recipe.servings}</h3>

                    <ul>
                        <li>
                            <span class='icon icon-users' />
                            <span>1</span>
                        </li>
                        <li>
                            <span class='icon icon-clock' />
                            <span>15 min</span>
                        </li>
                        <li>
                            <span class='icon icon-level' />
                            <span>Beginner level</span>
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
                        For an extra thick and creamy bowl, add oat bran. It'll make for a hearty helping and also add
                        more fiber to your meal. If you love the taste of chai, you'll enjoy this spiced version with
                        coriander, cinnamon, and turmeric.
                    </p>

                    <p class='ingredients'>
                        <span>Ingredients:&nbsp;</span>Milk, salt, coriander, cardamom, cinnamon, turmeric, honey,
                        vanilla extract, regular oats, oat bran.
                    </p>
                </article>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};
export default Modal;
