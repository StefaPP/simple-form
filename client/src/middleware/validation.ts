import { Middleware } from 'redux';

const validateInputMiddleware: Middleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== "UPDATE_INPUT") {
    return next(action);
  }
  
  const { form: { errors } } = getState();
  let error;
  const { fields, values, id } = action.payload;
  if (fields[id] && fields[id].validation) {
    error = fields[id].validation.rule(values, id);
  }

  action.errors = { ...errors, [id]: { message: error, valid: !error } };
  next(action);
};

export default validateInputMiddleware;