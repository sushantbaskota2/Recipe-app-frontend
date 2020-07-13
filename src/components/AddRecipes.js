import React, { useState, useEffect } from 'react';
import './css/AddRecipes.scss';
import axios from '../axios';
import { connect } from 'react-redux';
import history from '../history';
const AddRecipes = (props) => {
    const [ edit, setEdit ] = useState(true);
    const [ title, setTitle ] = useState('');
    const [ summary, setSummary ] = useState('');
    const [ servings, setServings ] = useState('');
    const [ cuisines, setCuisines ] = useState('');
    const [ restrictions, setRestrictions ] = useState({
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        veryHealthy: false
    });
    const [ instructions, setInstructions ] = useState('');
    const [ pricePerServing, setPricePerServing ] = useState('');
    const [ nutrients, setNutrients ] = useState({
        calories: '',
        carbs: '',
        protein: '',
        fat: ''
    });
    const [ extendedIngredients, setIngredients ] = useState([]);
    const [ ingredient, setIngredient ] = useState('');
    const [ readyInMinutes, setReadyInMinutes ] = useState('');
    const [ file, setFile ] = useState(null);
    const [ image, setImage ] = useState('');
    const dotheTing = async () => {
        const recipe = await axios.get(`/recipes/${props.match.params.id}`);
        console.log(recipe.data);
        setTitle(recipe.data.title);
        setIngredients(recipe.data.extendedIngredients);
        setSummary(recipe.data.summary);
        setServings(recipe.data.servings);
        let cuzin = '';
        recipe.data.cuisines.map((cu) => {
            if ((cuzin = '')) {
                cuzin = cu;
            } else {
                cuzin = cu + ', ' + cuzin;
            }
        });
        setCuisines(cuzin);
        setReadyInMinutes(recipe.data.readyInMinutes);
        setImage(recipe.data.image);
        setPricePerServing(recipe.data.pricePerServing);
        setRestrictions(recipe.data.restrictions);
        setInstructions(recipe.data.instructions);
        setNutrients(recipe.data.nutrients);
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        const hero = {
            id: Math.floor(Math.random() * 1000),
            title,
            summary,
            servings,
            cuisines: cuisines.split(','),
            pricePerServing,
            readyInMinutes,
            extendedIngredients,
            nutrients,
            restrictions,
            instructions,
            image
        };

        if (props.match.params.id) {
            hero['_id'] = props.match.params.id;
        }
        console.log(hero);

        axios.post('/users/recipes', hero, {
            headers: {
                Authorization: `Bearer ${props.user.token}`
            }
        });
        console.log('bhayo hai');
        history.push('/user/recipes');
    };

    useEffect(
        () => {
            if (edit) {
                if (props.match.params.id) {
                    dotheTing();
                    setEdit(false);
                }
            }
            console.log(extendedIngredients);

            return () => {};
        },
        [ extendedIngredients, image ]
    );
    const getBase64 = async (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        await function() {
            return reader.result;
        };
        reader.onerror = function(error) {
            console.log('Error: ', error);
        };
    };
    return (
        <div className='fake-body'>
            <div className='settings'>
                <input checked={true} className='navr' name='nav' type='radio' />
                <span className='navr'>New Recipe</span>

                <main className='edit-content'>
                    <section className='editingsection' id='profile'>
                        <form onSubmit={formSubmit}>
                            <ul className='editul'>
                                <li className='editli'>
                                    <fieldset className='material'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                required='<%= true %>'
                                                type='text'
                                                value={title}
                                                onChange={(e) => {
                                                    setTitle(e.target.value);
                                                }}
                                            />
                                            <label>Recipe Name</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <fieldset className='material'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                required='<%= true %>'
                                                type='text'
                                                value={summary}
                                                onChange={(e) => {
                                                    setSummary(e.target.value);
                                                }}
                                            />
                                            <label>Summary</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <fieldset className='material'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                required='<%= true %>'
                                                type='text'
                                                value={servings}
                                                onChange={(e) => {
                                                    setServings(e.target.value);
                                                }}
                                            />
                                            <label>Servings</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <fieldset className='material'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                type='text'
                                                value={pricePerServing}
                                                onChange={(e) => {
                                                    setPricePerServing(e.target.value);
                                                }}
                                            />
                                            <label>Cost per serving in $</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <fieldset className='material'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                type='text'
                                                value={cuisines}
                                                required={true}
                                                onChange={(e) => {
                                                    setCuisines(e.target.value);
                                                }}
                                            />
                                            <label>Cuisines (eg. Indian)</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <fieldset className='material'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                required='<%= true %>'
                                                type='text'
                                                value={readyInMinutes}
                                                onChange={(e) => {
                                                    setReadyInMinutes(e.target.value);
                                                }}
                                            />
                                            <label>Ready in Minutes</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <fieldset className='material'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                value={ingredient}
                                                onChange={(e) => {
                                                    setIngredient(e.target.value);
                                                }}
                                            />
                                            <label>Ingredients</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <fieldset className='material-button'>
                                        <div>
                                            <button
                                                onClick={(e) => {
                                                    setIngredients([ ...extendedIngredients, { name: ingredient } ]);
                                                    setIngredient('');
                                                }}
                                                type='button'
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    {extendedIngredients.map((a) => (
                                        <li id={a.name} className='ingli {&#39;fadeOut&#39; : skill.done}'>
                                            <span
                                                className='fa fa-close'
                                                onClick={(e) => {
                                                    setIngredients(
                                                        extendedIngredients.filter((ing) => {
                                                            console.log(ing === a);
                                                            console.log(extendedIngredients);

                                                            return ing.name !== a.name;
                                                        })
                                                    );
                                                }}
                                            />
                                            <span> {a.name}</span>
                                        </li>
                                    ))}
                                </li>
                                <li className='editli' />
                                <li className='editli'>
                                    <label>Nutrients (in g)</label>
                                </li>
                                <li className='editli' />
                                <li className='editli'>
                                    <fieldset className='material'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                type='text'
                                                value={nutrients.calories}
                                                onChange={(e) =>
                                                    setNutrients({ ...nutrients, calories: e.target.value })}
                                            />
                                            <label>Calories</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <fieldset className='material'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                type='text'
                                                value={nutrients.carbs}
                                                onChange={(e) => setNutrients({ ...nutrients, carbs: e.target.value })}
                                            />
                                            <label>Carbs</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <fieldset className='material'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                type='text'
                                                value={nutrients.fat}
                                                onChange={(e) => setNutrients({ ...nutrients, fat: e.target.value })}
                                            />
                                            <label>Fat</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <fieldset className='material'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                type='text'
                                                value={nutrients.protein}
                                                onChange={(e) =>
                                                    setNutrients({ ...nutrients, protein: e.target.value })}
                                            />
                                            <label>Protein</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>

                                <li className='large'>
                                    <fieldset className='material'>
                                        <div>
                                            <textarea
                                                className='editRtextarea'
                                                type='text'
                                                value={instructions}
                                                required
                                                onChange={(e) => setInstructions(e.target.value)}
                                            />
                                            <label className='label-instructions'>Instructions</label>
                                            <hr />
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <label> Dietary Restrictions</label>{' '}
                                    <fieldset className='material-checkbox'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                type='checkbox'
                                                checked={restrictions.vegetarian}
                                                onChange={(e) => {
                                                    setRestrictions({ ...restrictions, vegetarian: e.target.checked });
                                                    console.log(e.target);
                                                }}
                                            />
                                            <div className='check'>
                                                <span>
                                                    <svg viewBox='0 0 24 24'>
                                                        <g>
                                                            <line x1='4.5' x2='9.24' y1='12.5' y2='17.24' />
                                                            <line x1='9.24' x2='19.76' y1='17.24' y2='6.73' />
                                                        </g>
                                                        <g>
                                                            <line x1='4.5' x2='9.24' y1='12.5' y2='17.24' />
                                                            <line x1='9.24' x2='19.76' y1='17.24' y2='6.73' />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <label>Vegetarian</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className='material-checkbox'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                checked={restrictions.vegan}
                                                onChange={(e) => {
                                                    setRestrictions({ ...restrictions, vegan: e.target.checked });
                                                    console.log(e.target);
                                                }}
                                                type='checkbox'
                                            />
                                            <div className='check'>
                                                <span>
                                                    <svg viewBox='0 0 24 24'>
                                                        <g>
                                                            <line x1='4.5' x2='9.24' y1='12.5' y2='17.24' />
                                                            <line x1='9.24' x2='19.76' y1='17.24' y2='6.73' />
                                                        </g>
                                                        <g>
                                                            <line x1='4.5' x2='9.24' y1='12.5' y2='17.24' />
                                                            <line x1='9.24' x2='19.76' y1='17.24' y2='6.73' />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <label>Vegan</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className='material-checkbox'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                checked={restrictions.glutenFree}
                                                onChange={(e) => {
                                                    setRestrictions({ ...restrictions, glutenFree: e.target.checked });
                                                    console.log(e.target);
                                                }}
                                                type='checkbox'
                                            />
                                            <div className='check'>
                                                <span>
                                                    <svg viewBox='0 0 24 24'>
                                                        <g>
                                                            <line x1='4.5' x2='9.24' y1='12.5' y2='17.24' />
                                                            <line x1='9.24' x2='19.76' y1='17.24' y2='6.73' />
                                                        </g>
                                                        <g>
                                                            <line x1='4.5' x2='9.24' y1='12.5' y2='17.24' />
                                                            <line x1='9.24' x2='19.76' y1='17.24' y2='6.73' />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <label>Gluten Free</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className='material-checkbox'>
                                        <div>
                                            <input
                                                className='editRinput'
                                                checked={restrictions.veryHealthy}
                                                onChange={(e) => {
                                                    console.log(e.target);
                                                    setRestrictions({ ...restrictions, veryHealthy: e.target.checked });
                                                }}
                                                type='checkbox'
                                            />
                                            <div className='check'>
                                                <span>
                                                    <svg viewBox='0 0 24 24'>
                                                        <g>
                                                            <line x1='4.5' x2='9.24' y1='12.5' y2='17.24' />
                                                            <line x1='9.24' x2='19.76' y1='17.24' y2='6.73' />
                                                        </g>
                                                        <g>
                                                            <line x1='4.5' x2='9.24' y1='12.5' y2='17.24' />
                                                            <line x1='9.24' x2='19.76' y1='17.24' y2='6.73' />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <label>Healthy</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </li>
                                <li className='editli'>
                                    <div class={`file-upload ${file ? 'active' : ''}`}>
                                        <h2>Recipe Image</h2>
                                        <div class='file-select'>
                                            <div class='file-select-button' id='fileName'>
                                                Choose File
                                            </div>
                                            <div class='file-select-name' id='noFile'>
                                                {file ? file.name : 'No file chosen...'}
                                            </div>
                                            <input
                                                type='file'
                                                name='chooseFile'
                                                id='chooseFile'
                                                onChange={async (e) => {
                                                    e.preventDefault();
                                                    let file = e.target.files[0];
                                                    let reader = new FileReader();
                                                    reader.readAsDataURL(file);
                                                    reader.onloadend = () => {
                                                        setFile(file);
                                                        setImage(reader.result);
                                                    };
                                                }}
                                            />
                                        </div>
                                        {image ? <img src={`${image.toString()}`} /> : ''}
                                    </div>
                                </li>
                                <li className='editli'>
                                    <fieldset className='material-button center'>
                                        <div>
                                            <input className='save' type='submit' value='Save' />
                                        </div>
                                    </fieldset>
                                </li>
                            </ul>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, {})(AddRecipes);
