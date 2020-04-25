import React from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';

const CardViewer = ({ recipes, clickMore, limit, search, modal }) => {
    return (
        <section
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                float: 'left',
                justifyContent: 'left',
                marginTop: '1%',
                position: 'absolute'
            }}
        >
            {recipes.slice(0, limit).map((recipe) => {
                return <Cards recipe={recipe} modal={modal} key={recipe._id} />;
            })}

            {recipes.length > limit ? (
                <div
                    className='arrowDiv'
                    onClick={() => {
                        clickMore();
                    }}
                >
                    <svg className='arrows'>
                        <path className='a1' d='M0 0 L30 32 L60 0' />
                        <path className='a2' d='M0 20 L30 52 L60 20' />
                        <path className='a3' d='M0 40 L30 72 L60 40' />
                    </svg>
                </div>
            ) : (
                ''
            )}
        </section>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { ...ownProps, search: state.search };
};

export default connect(mapStateToProps, {})(CardViewer);
