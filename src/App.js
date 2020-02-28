import React from 'react';
import axios from 'axios';
import './App.css';
import CardViewer from './components/CardViewer';
import Loading from './components/Loading';
import SearchBox from './components/SearchBox';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null
        };
    }

    async componentDidMount() {
        const recipes = await axios.get('http://localhost:3000/recipes?name=chicken');
        this.setState({ recipes });
    }

    render() {
        return (
            <div style={{ display: 'block' }}>
                <SearchBox />
                {this.state.recipes ? <CardViewer recipes={this.state.recipes} /> : <Loading />}
            </div>
        );
    }
}

export default App;
