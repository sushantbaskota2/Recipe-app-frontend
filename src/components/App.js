import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Contents from './Contents';
import Landing from './Landing';
import Navbar from './Navbar';
import Favorites from './Favorites';
import Profile from './Profile';
import Modal from './Modal';
import Filter from './Filter';
import RecipeModal from './RecipeModal';
import Login from './Login';
import P404 from './P404';
import { connect } from 'react-redux';
import { setUser } from '../actions/index';
import EditProfile from './EditProfile';
import MyRecipes from './MyRecipes';
import AddRecipes from './AddRecipes';
import Fridge from './Fridge';
import Alert from './Alert';
const App = (props) => {
    props.setUser();
    return (
        <div>
            <Router history={history}>
                <Navbar />
                <div style={{ paddingTop: '80' }}>
                    <Switch>
                        <Route path='/' exact component={Landing} />
                        <Route path='/recipes' exact component={Contents} />
                        <Route path='/profile' exact component={Profile} />
                        <Route path='/logout' exact component={Login} />
                        <Route path='/recipes/:id' exact component={RecipeModal} />
                        <Route path='/alert' exact component={Alert} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/user/recipes' exact component={MyRecipes} />
                        <Route path='/user/favorites' exact component={Favorites} />
                        <Route path='/user/edit' exact component={EditProfile} />
                        <Route path='/user/recipes/add' exact component={AddRecipes} />
                        <Route path='/user/recipes/edit/:id' exact component={AddRecipes} />
                        <Route path='/user/fridge/' exact component={Fridge} />
                        <Route path='' component={P404} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};
export default connect(null, { setUser })(App);

//  <Route path='/recipes/:id' exact component={RecipeView} />
