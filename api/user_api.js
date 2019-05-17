import axios from 'axios'
import { getBaseUrl } from '../config/config';

const BASE_URL = getBaseUrl();

/**
 *
 * @param prenom
 * @param nom
 * @param mail
 * @param password
 * @param genre
 * @param dateNaissance
 * @returns {Promise<AxiosResponse<any> | never>}
 */
function addUser(prenom, nom, mail, password, genre, dateNaissance) {
    const url = `${BASE_URL}/user/add`;
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

/**
 *
 * @param mail
 * @param password
 * @returns {Promise<AxiosResponse<any> | never>}
 */
function loginUser(mail, password) {
    const url = `${BASE_URL}/user/login`;
    return axios.post(url, {
        password: password,
        mail: mail,
    })
        .then(response => response.data);
}

export {addUser, loginUser}