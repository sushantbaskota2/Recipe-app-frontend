import axios from 'axios';

const token = localStorage.getItem('jwtToken');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const auth = async () => {
    try {
        const user = await axios.get(`http://localhost:3000/users/me`, config);
        console.log(user);

        return user;
    } catch (e) {
        return;
    }
};

export default auth;
