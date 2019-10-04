import * as React from "react";
import Form from "./Form";
import { Field } from "./Field";
import { IFields } from "./Form/types";
import { required, isEmail, isChecked, isValidPhoneNumber } from "../utils/validation";

export const SimpleForm: React.SFC = () => {
  const fields: IFields = {
    firstName: {
      id: "firstName",
      label: "First name",
      validation: { rule: required }
    },
    lastName: {
      id: "lastName",
      label: "Last Name",
      validation: { rule: required }
    },
    address: {
      id: "address",
      label: "Address",
      validation: { rule: required }
    },
    phone: {
      id: "phone",
      label: "Phone",
      validation: { rule: isValidPhoneNumber }
    },
    email: {
      id: "email",
      label: "Email",
      validation: { rule: isEmail }
    },
    checkbox: {
      id: "checkbox",
      label: "Checkbox",
      type: "checkbox",
      validation: { rule: isChecked }
    }
  };
  return (
    <Form
      fields={fields}
      render={() => (
        <>
          {Object.keys(fields).map(key => (
            <Field {...fields[key]} key={key} />
          ))}
        </>
      )}
    />
  );
};
