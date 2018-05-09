import { FETCH_PICTURES, FETCH_PICTURE_ERROR } from '../actions';

export default (pictures = [], action) => {
    switch (action.type) {
      case FETCH_PICTURES:
        return ({...action.payload});
      case FETCH_PICTURE_ERROR:
        return action.payload;
      default:
        return pictures;
    }
}