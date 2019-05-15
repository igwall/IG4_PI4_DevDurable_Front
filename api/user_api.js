import axios from 'axios'
import { getBaseUrl } from '../config/config';

const BASE_URL = getBaseUrl();

function addUser(prenom, nom, mail, password, genre, dateNaissance) {
    const url = `${BASE_URL}/user/add`;
    console.log(url)
    console.log('not bad')
    return axios.post(url, {
        password: password,
        nom: nom,
        prenom: prenom,
        dateNaissance: dateNaissance,
        genre: genre,
        mail: mail,
    })
        .then(response => response.data);
}

export {addUser}