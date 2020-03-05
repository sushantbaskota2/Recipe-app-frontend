import React from 'react';
import axios from 'axios';
import './App.css';
import CardViewer from './components/CardViewer';
import Loading from './components/Loading';
import SearchBox from './components/SearchBox';

import auth from './auth/index';

import Login from './components/Login';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null,
            limit: 48,
            input: '',
            loading: true,
            user: null
        };
    }

    async componentDidMount() {
        let recipes = null;

        recipes = await axios.get('http://localhost:3000/recipes');
        this.setState({ recipes: recipes.data, loading: false });
        const user = await auth();
        this.setState({ user });
        console.log(user);
    }

    // async componentDidUpdate() {
    //     console.log(this.state.input);

    //     let recipes = null;
    //     if (this.state.input) {
    //         recipes = await axios.get(`http://localhost:3000/recipes?name=${this.state.input}`);
    //         console.log(recipes);

    //         this.setState({ recipes: recipes.data, loading: false });
    //     }
    // }

    clickMore = () => {
        console.log(this.state.limit);
        this.setState({ limit: this.state.limit + 24 });
    };

    inputChange = (input) => {
        this.setState({ input });
    };

    render() {
        return this.state.user != null ? (
            <div style={{ display: 'block' }}>
                <SearchBox inputChange={this.inputChange} />
                {!this.state.loading ? (
                    <CardViewer
                        clickMore={this.clickMore}
                        limit={this.state.limit}
                        recipes={this.state.recipes}
                        query={this.state.input}
                    />
                ) : (
                    <Loading />
                )}
            </div>
        ) : (
            <Login />
        );
    }
}

export default App;
