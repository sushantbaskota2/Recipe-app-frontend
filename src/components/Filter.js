import React from 'react';
import { connect } from 'react-redux';
import './css/Filter.css';
const Filter = ({ filterContents, filters }) => {
    return (
        <div className='totalFilter'>
            <nav class='group explore-tabs search-results-tabs search-filters type-pens'>
                <a
                    onClick={() => filterContents('GLUTENFREE')}
                    class={`button button-medium search-filter ${filters.gluten ? 'search-filter-active' : ''}`}
                >
                    Gluten Free
                </a>
                <a
                    onClick={() => filterContents('VEGAN')}
                    class={`button button-medium search-filter ${filters.vegan ? 'search-filter-active' : ''}`}
                >
                    Vegan
                </a>
                <a
                    onClick={() => filterContents('VEGETARIAN')}
                    class={`button button-medium search-filter ${filters.vegetarian ? 'search-filter-active' : ''}`}
                >
                    Vegetarian
                </a>
                <a
                    onClick={() => filterContents('HEALTHY')}
                    class={`button button-medium search-filter ${filters.healthy ? 'search-filter-active' : ''}`}
                >
                    Healthy
                </a>
                <a
                    onClick={() => filterContents('DAIRY FREE')}
                    class={`button button-medium search-filter ${filters.dairyFree ? 'search-filter-active' : ''}`}
                >
                    Dairy Free
                </a>
                <a
                    onClick={() => filterContents('PESCATARIAN')}
                    class={`button button-medium search-filter ${filters.pescatarian ? 'search-filter-active' : ''}`}
                >
                    Pescatarian
                </a>
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { filters: state.filters };
};

export default connect(mapStateToProps)(Filter);
