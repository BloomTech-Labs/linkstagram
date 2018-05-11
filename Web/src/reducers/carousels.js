import { CAROUSEL_ITEMS_DEFAULT, CAROUSEL_ITEMS_UNREGISTERED, CAROUSEL_ITEMS_REGISTERED, CAROUSEL_ITEMS_ERROR } from '../actions';


export default (items = [], action) => {
    switch (action.type) {
        case CAROUSEL_ITEMS_DEFAULT:
            return action.payload;
        case CAROUSEL_ITEMS_ERROR:
            return items;
        case CAROUSEL_ITEMS_REGISTERED:
            return action.payload;
        case CAROUSEL_ITEMS_UNREGISTERED:
            return action.payload;
        default:
            return items;
    }
}