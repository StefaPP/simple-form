
type TInputType = "text" | "checkbox";

interface IValues {
  [key: string]: any;
}

interface IValidation {
  rule: (values: IValues, fieldName: string) => string;
}

interface IFieldProps {
  label: string;
  id: string;
  type?: TInputType;
  value?: string;
  checked?: boolean;
  validation: IValidation;
}

export { TInputType, IFieldProps };