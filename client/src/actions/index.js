import axios from 'axios';
import { FETCH_USER, UPDATE_USER } from './types'

export const fetchUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/current_user');

        dispatch({
            type: FETCH_USER,
            payload : res.data
        })
    }catch(err) {
        throw(err)
    }
    
}

export const sendData = (data) => async dispatch => {
    const res = await axios.post('/api/update_user', data);

    dispatch({
        type: UPDATE_USER,
        payload : res.data
    })
}