import React from 'react';
import '../SearchBox.css';
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
                <a href='search' className='search-btn'>
                    <i className='fas fa-search' />
                </a>
            </div>
        );
    }
}

export default SearchBox;
