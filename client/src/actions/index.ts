import { IFields } from "../components/Form/types";

export const validateInput = (payload: IFields) => {
  return {
    type: "UPDATE_INPUT",
    payload
  };
}

export const submitForm = (payload: IFields) => {
  return {
    type: "SUBMIT_FORM",
    payload
  };
}

export const submitFailed = (message: any) => {
  return {
    type: "SUBMIT_FAILED",
    message
  };
}

export const submitSuccess = (message: string) => {
  return {
    type: "SUBMIT_SUCCESS",
    message
  };
}