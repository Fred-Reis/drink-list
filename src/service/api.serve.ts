import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://raw.githubusercontent.com/teijo/iba-cocktails/master/recipes.json',
});

export default api;
