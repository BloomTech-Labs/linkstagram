import axios from 'axios';
import {FETCH_PICTURE_ERROR, FETCH_PICTURES} from '../constants/pictures';

const API_URL = 'http://localhost:2000';


export const fetchPictures = (access_token, max_id, min_id, count ) => {
    return dispatch => {
        let optionalParams = [];
        if(max_id)
            optionalParams['max_id'] = max_id;
        
        if(min_id)
            optionalParams['min_id'] = min_id;
    
        if(count)
            optionalParams['count'] = count;
        
        axios
            .get(`https://api.instagram.com/v1/users/self/media/recent?access_token=${access_token}&` + optionalParams.join('&'))
            .then((response) => {
                dispatch({
                    type: FETCH_PICTURES,
                    payload:response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_PICTURE_ERROR,
                    payload:error
                });
            });
    };    
}