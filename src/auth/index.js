import axios from '../axios';

const token = localStorage.getItem('jwtToken');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const auth = async () => {
    try {
        const user = await axios.get(`/users/me`, config);
        user.data.token = token;
        return user;
    } catch (e) {
        return;
    }
};

export default auth;
