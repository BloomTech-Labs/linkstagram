import axios from 'axios';

import {CHECK_IF_AUTHENTICATED, USER_AUTHENTICATED, USER_UNAUTHENTICATED, AUTHENTICATION_ERROR} from './constants/auth';
import {CHECK_IF_REGISTERED, USER_REGISTERED, REGISTRATION_ERROR, REGISTRATION_EXPIRED, SIGN_UP_TOGGLE} from './constants/register';
import {FETCH_PICTURES, FETCH_PICTURE_ERROR} from './constants/pictures';
import {CAROUSEL_ITEMS_DEFAULT, CAROUSEL_ITEMS_UNREGISTERED, CAROUSEL_ITEMS_REGISTERED, CAROUSEL_ITEMS_ERROR} from './constants/carousel';

import {signin, signout } from './helpers/auth';
import { signup, signUpToggle } from './helpers/register';
import {fetchPictures} from './helpers/pictures';
import {getCarouselItems} from './helpers/carousel';

 export { CHECK_IF_AUTHENTICATED, USER_AUTHENTICATED, USER_UNAUTHENTICATED, AUTHENTICATION_ERROR };
 export { CHECK_IF_REGISTERED, USER_REGISTERED, REGISTRATION_ERROR, REGISTRATION_EXPIRED, SIGN_UP_TOGGLE } ;
 export { FETCH_PICTURES, FETCH_PICTURE_ERROR };
 export { CAROUSEL_ITEMS_DEFAULT, CAROUSEL_ITEMS_UNREGISTERED, CAROUSEL_ITEMS_REGISTERED, CAROUSEL_ITEMS_ERROR };
 export { signin, signout  };
 export { signup, signUpToggle };
 export { fetchPictures };
 export { getCarouselItems };
