import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';
import CardViewer from './CardViewer';
import Loading from './Loading';
import SearchBox from './SearchBox';
import history from '../history';
import Filter from './Filter';
import auth from '../auth/index';
import { setFilterData } from '../actions';

import Login from './Login';
import Modal from './Modal';

class Contents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null,
            limit: 48,
            loading: true,
            user: null,
            modal: false,
            activeRecipe: null,
            filteredRecipes: null
        };
    }

    async componentDidMount() {
        console.log(this.props.search);
        let recipes = null;
        let first = false;
        const user = await auth();
        this.setState({ user });
        recipes = await axios.get('http://localhost:3000/recipes');
        this.setState({ recipes: recipes.data.filter((rec) => rec.title.toLowerCase().includes(this.props.search)) });

        Object.keys(this.props.filters).map((key) => {
            if (!this.props.filters[key]) {
                first = true;
            }
        });
        if (first) {
            this.setState({ filteredRecipes: recipes.data, loading: false });
        }
    }

    async componentDidUpdate(lastProps) {
        let recipes = this.state.recipes;

        if (lastProps.filters !== this.props.filters) {
            recipes = this.handleFilterSearch(recipes);
            console.log(recipes);
        }
        if (recipes) {
            if (lastProps.search !== this.props.search) {
                this.setState({
                    filteredRecipes: recipes.filter((rec) => rec.title.toLowerCase().includes(this.props.search)),
                    loading: false
                });
            } else {
                if (lastProps.filters !== this.props.filters) {
                    this.setState({
                        filteredRecipes: recipes.filter((rec) => rec.title.toLowerCase().includes(this.props.search)),
                        loading: false
                    });
                }
            }
        }
    }

    handleFilterSearch = (recipes) => {
        let finalRecipes = recipes;
        console.log(finalRecipes);

        const filters = this.props.filters;
        const keys = Object.keys(filters);
        keys.map((key) => {
            if (filters[key] === true) {
                switch (key) {
                    case 'vegan':
                        finalRecipes = finalRecipes.filter((recipe) => recipe.restrictions.vegan);
                        console.log(finalRecipes);

                        break;
                    case 'vegetarian':
                        finalRecipes = finalRecipes.filter((recipe) => recipe.restrictions.vegetarian);
                        break;
                    case 'healthy':
                        finalRecipes = finalRecipes.filter((recipe) => recipe.restrictions.veryHealthy);
                        break;
                    case 'gluten':
                        finalRecipes = finalRecipes.filter((recipe) => recipe.restrictions.glutenFree);
                        break;
                    case 'dairyFree':
                        finalRecipes = finalRecipes.filter((recipe) => recipe.diets.includes('dairy free'));
                        break;
                    case 'pescatarian':
                        finalRecipes = finalRecipes.filter((recipe) => recipe.diets.includes('pescatarian'));
                        break;
                    default:
                        break;
                }
            }
        });
        console.log(finalRecipes);

        return finalRecipes;
    };

    filterContents = (filter) => {
        const filters = this.props.filters;
        switch (filter) {
            case 'VEGETARIAN':
                this.props.setFilterData({ ...filters, vegetarian: !filters.vegetarian });
                break;
            case 'VEGAN':
                this.props.setFilterData({ ...filters, vegan: !filters.vegan });
                break;
            case 'PESCATARIAN':
                this.props.setFilterData({ ...filters, pescatarian: !filters.pescatarian });
                break;
            case 'HEALTHY':
                this.props.setFilterData({ ...filters, healthy: !filters.healthy });
                break;
            case 'DAIRY FREE':
                this.props.setFilterData({ ...filters, dairyFree: !filters.dairyFree });
                break;
            case 'GLUTENFREE':
                this.props.setFilterData({ ...filters, gluten: !filters.gluten });
                break;
            default:
                break;
        }

        console.log(this.props.filters);
    };

    clickMore = () => {
        console.log(this.state.limit);
        this.setState({ limit: this.state.limit + 24 });
    };

    openModal = (recipe) => {
        this.setState({ modal: true, activeRecipe: recipe });
    };

    modalDismiss = () => {
        this.setState({ modal: false });
    };

    render() {
        console.log(this.props.filters);

        return !this.state.loading ? (
            <div>
                <div style={{ display: 'block' }}>
                    <SearchBox />
                    <Filter filterContents={this.filterContents} filters={this.state.filters} />
                    <CardViewer
                        clickMore={this.clickMore}
                        limit={this.state.limit}
                        recipes={this.state.filteredRecipes}
                        modal={this.openModal}
                    />
                    {this.state.modal ? (
                        <Modal modalDismiss={this.modalDismiss} recipe={this.state.activeRecipe} />
                    ) : (
                        ''
                    )}
                </div>
            </div>
        ) : (
            <Loading />
        );
    }
}

const mapStateToProps = (state) => {
    return { search: state.search, filters: state.filters };
};

export default connect(mapStateToProps, { setFilterData })(Contents);
