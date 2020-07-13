import axios from 'axios';

const PATH = 'https://damp-falls-47662.herokuapp.com/';

export default axios.create({ baseURL: PATH });
