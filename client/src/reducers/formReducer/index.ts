const INITIAL_STATE = {
  errors: {},
  submitMessage: '',
};


export default function form(state: any = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'UPDATE_INPUT': {
      return { ...state, errors: action.errors }
    }
    case 'SUBMIT_SUCCESS': {
      return { ...state, submitMessage: action.message }
    }
    case 'SUBMIT_FAILED': {
      return { ...state, submitMessage: action.message }
    }
    default:
      return state;
  }
};