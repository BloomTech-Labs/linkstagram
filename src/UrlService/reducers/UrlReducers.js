import { SHORT_URL, URL_SUCCESS, URL_FAILURE } from '../actions';
let links = [];

export default (state = [], action) => {
    switch (action, type) {

        case SHORT_URL: 
            links = [...state];
            return {
                ...links
            };

        case URL_FAILURE:
            return
                { 
                state : action.payload.data 
            };

        case URL_SUCCESS: 
            links = [...action.payload.data];
            return {
                ...links
            };

    default:
       return state; 
        
    };   
}