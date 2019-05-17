import axios from 'axios'
import { getBaseUrl } from '../config/config';

const BASE_URL = getBaseUrl();

/**
 * Get bus stops of Hérault Transport
 * @returns {Promise<AxiosResponse<any> | never>}
 */
function getBusStops() {
    const url = `${BASE_URL}/transport/bus/stops`;
    return axios.get(url)
        .then(response => response.data);
}

export {getBusStops}