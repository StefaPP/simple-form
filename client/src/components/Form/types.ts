import { IFieldProps } from "../Field/types";

interface IValues {
    [key: string]: any;
}

interface IErrors {
    [key: string]: {
        message: string;
        valid?: boolean;
    }
}

interface IFormState {
    values: IValues;
}

interface IFormContext {
    setValues: (values: IValues) => void;
    errors: IErrors;
    validate: (fieldName: string) => void;
}

interface IFields {
    [key: string]: IFieldProps;
}

interface IFormProps {
    fields: IFields;
    render: () => React.ReactNode;
    errors?: IErrors;
    validateInput?: (...args: any[]) => void;
    submitForm: (...args: any[]) => void;
}

export {
    IValues,
    IErrors,
    IFormContext,
    IFormState,
    IFormProps,
    IFields
}