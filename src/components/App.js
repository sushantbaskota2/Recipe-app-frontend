import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Contents from './Contents';
import Navbar from './Navbar';
import Favorites from './Favorites';
import Profile from './Profile';
import Modal from './Modal';
import Filter from './Filter';
import RecipeModal from './RecipeModal';
import Login from './Login';
const App = () => {
    return (
        <div>
            <Router history={history}>
                <Navbar />
                <div style={{ paddingTop: '80' }}>
                    <Switch>
                        <Route path='/recipes' exact component={Contents} />
                        <Route path='/profile' exact component={Profile} />
                        <Route path='/logout' exact component={Login} />
                        <Route path='/recipes/:id' exact component={RecipeModal} />
                        <Route path='/filter' exact component={Filter} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/user/favorites' exact component={Favorites} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};
export default App;

//  <Route path='/recipes/:id' exact component={RecipeView} />
