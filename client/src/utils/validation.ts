import { IValues, IFields, IErrors } from "../components/Form/types";

const required = (values: IValues, fieldName: string): string =>
  values[fieldName] === undefined ||
    values[fieldName] === null ||
    values[fieldName] === ""
    ? "Required"
    : "";

const isEmail = (values: IValues, fieldName: string): string => {
  const isFilled = required(values, fieldName);
  if (required(values, fieldName)) {
    return isFilled;
  }
  return values[fieldName] &&
    values[fieldName].search(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    ? "Bad format"
    : "";
}

const isValidPhoneNumber = (values: IValues, fieldName: string) => {
  const isFilled = required(values, fieldName);
  if (required(values, fieldName)) {
    return isFilled;
  }
  const match = values[fieldName].match(/\+\d{10,}/);
  return match && values[fieldName] === match[0] ? "" : "Bad format"
};

const isChecked = (values: IValues, fieldName: string): string => {
  return !values[fieldName] ? "Required" : "";
}

const areAllFieldsValidated = (fields: IFields, errors: IErrors) => {
  const fieldKeys = Object.keys(fields);
  const validFields = fieldKeys.map((key: string) =>
    errors[key] && errors[key].valid ? true : false
  )
  return validFields.includes(false);
}

export {
  required,
  isEmail,
  isValidPhoneNumber,
  isChecked,
  areAllFieldsValidated
}