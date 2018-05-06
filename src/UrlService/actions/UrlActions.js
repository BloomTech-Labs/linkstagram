import axios from 'axios';

export const SHORT_URL = 'short_url';
export const URL_SUCCESS = 'url_success';
export const URL_FAILURE = 'url_failure'; 
export const DELETE_LINK = 'delete_link';
export const DELETE_SUCCESS = 'delete_success';
export const DELETE_FAILURE = 'delete_failure';
//this is used for shortening the url links

export function ShortenLink(url) {
    return function(dispatch) {
        dispatch({ type: SHORT_URL, payload: url });
        const request = axios.post(`https://kutt.it/api/url/submit`, {
                
                 headers: {
                   'X-API-Key': '8vIzxISaNUwby7XYXcMcY6m5aGWgfTk3WMYzD5kF'
                    },      
                    target: `${url}`
                });
                return request
                .then(
                    response => dispatch(urlSuccess(response.data)),
                    error => dispatch(urlFailure(error))
                )      
        };   
        function urlSuccess(url) { return { type: URL_SUCCESS, payload: url } };
        function urlFailure(error) { return { type: URL_FAILURE, payload: error } };
    }

//this will return a url object like https://kutt.it/6d33DA
//the 6d33DA is the id number for the link.

export function DeletLink(url) {
    const regex = /[^(https:\/\/kutt.it\/)](\w+)/;
    const urlID = regex.exec(url);
    return function(dispatch) {
        dispatch({ type: DELETE_LINK, payload: urlID });
        const request = axios.post(`https://kut.it/api/url/deleteurl`, {
            headers: {
                'X-API-Key': '8vIzxISaNUwby7XYXcMcY6m5aGWgfTk3WMYzD5kF'
                 },      
                 id: `${urlID}`
             });
             return request
             .then(
                 response => dispatch(deleteSuccess(response.data)),
                 error => dispatch(deleteFailure(error))
             )      
    };
    function deleteSuccess(data) { return { type: DELETE_SUCCESS, payload: data } };
    function deleteFailure(error) { return { type: DELETE_FAILURE, payload: error } };
}