import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './css/Filter.css';
const Filter = ({ filterContents, filters }) => {
    const [ cost, setCost ] = useState(false);
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
                <a
                    onClick={() => {
                        setCost(!cost);
                    }}
                    class={`button button-medium search-filter ${filters.pescatarian ? 'search-filter-active' : ''}`}
                >
                    Cost
                </a>
            </nav>

            {cost ? (
                <nav class='group explore-tabs search-results-tabs-cost search-filters type-pens'>
                    <label style={{ color: 'white' }}>Less than: </label>
                    <a
                        onClick={() => {
                            if (filters.cost === 10) {
                                filterContents('COST', 0);
                            } else {
                                filterContents('COST', 10);
                            }
                        }}
                        class={`button button-medium search-filter ${filters.cost === 10
                            ? 'search-filter-active'
                            : ''}`}
                    >
                        $10
                    </a>
                    <a
                        onClick={() => {
                            if (filters.cost === 20) {
                                filterContents('COST', 0);
                            } else {
                                filterContents('COST', 20);
                            }
                        }}
                        class={`button button-medium search-filter ${filters.cost === 20
                            ? 'search-filter-active'
                            : ''}`}
                    >
                        $20
                    </a>
                    <a
                        onClick={() => {
                            if (filters.cost === 30) {
                                filterContents('COST', 0);
                            } else {
                                filterContents('COST', 30);
                            }
                        }}
                        class={`button button-medium search-filter ${filters.cost === 30
                            ? 'search-filter-active'
                            : ''}`}
                    >
                        $30
                    </a>
                    <a
                        onClick={() => {
                            if (filters.cost === 40) {
                                filterContents('COST', 0);
                            } else {
                                filterContents('COST', 40);
                            }
                        }}
                        class={`button button-medium search-filter ${filters.cost === 40
                            ? 'search-filter-active'
                            : ''}`}
                    >
                        $40
                    </a>
                    <a
                        onClick={() => {
                            if (filters.cost === 50) {
                                filterContents('COST', 0);
                            } else {
                                filterContents('COST', 50);
                            }
                        }}
                        class={`button button-medium search-filter ${filters.cost === 50
                            ? 'search-filter-active'
                            : ''}`}
                    >
                        $50
                    </a>
                    <a
                        onClick={() => {
                            if (filters.cost === 60) {
                                filterContents('COST', 0);
                            } else {
                                filterContents('COST', 60);
                            }
                        }}
                        class={`button button-medium search-filter ${filters.cost === 60
                            ? 'search-filter-active'
                            : ''}`}
                    >
                        $60
                    </a>
                </nav>
            ) : (
                ''
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { filters: state.filters };
};

export default connect(mapStateToProps)(Filter);

// <nav class='group explore-tabs search-results-tabs-cost search-filters type-pens'>
//     <a
//         onClick={() => filterContents('GLUTENFREE')}
//         class={`button button-medium search-filter ${filters.gluten ? 'search-filter-active' : ''}`}
//     >
//         $100
//     </a>
//     <a
//         onClick={() => filterContents('VEGAN')}
//         class={`button button-medium search-filter ${filters.vegan ? 'search-filter-active' : ''}`}
//     >
//         $200
//     </a>
// </nav>
