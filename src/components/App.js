import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Contents from './Contents';
import Navbar from './Navbar';
const App = () => {
    return (
        <div>
            <Router history={history}>
                <Navbar />
                <div style={{ paddingTop: '80' }}>
                    <Switch>
                        <Route path='/' exact component={Contents} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};
export default App;

//  <Route path='/recipes/:id' exact component={RecipeView} />
