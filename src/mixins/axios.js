import axios from 'axios'

export function listPoints() {
    return axios
        .get('http://localhost:8080/listPoints')
}