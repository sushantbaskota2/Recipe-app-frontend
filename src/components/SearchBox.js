import React from 'react';
import '../SearchBox.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSearchData } from '../actions';
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
        this.props.inputChange(this.state.text);
        this.props.setSearchData(this.state.text);
    };

    render() {
        return (
            <div className='search-box'>
                <input
                    type='text'
                    placeholder='Type to search'
                    value={this.state.text}
                    className='search-txt'
                    onChange={this.handleChange}
                />
                <a className='search-btn'>
                    <i className='fas fa-search' />
                </a>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {}
// };

export default connect(null, { setSearchData })(SearchBox);
