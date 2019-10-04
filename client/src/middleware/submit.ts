import { Middleware } from 'redux';
import axios from 'axios';
import { submitFailed, submitSuccess } from '../actions';
const apiMiddleware: Middleware = ({ dispatch }) => next => action => {
  if (action.type !== "SUBMIT_FORM") {
    return next(action)
  }
  axios.post('http://localhost:4000/submit', action.payload).then((response) => {
    return response;
  }).catch((error) => {
    dispatch(submitFailed('Submit error'));
  }).then(() => {
    dispatch(submitSuccess('Submit success'));
  })
};

export default apiMiddleware;