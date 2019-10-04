import React, { PureComponent } from "react";
import { IFieldProps } from "./types";
import { FormContext } from "../Form/context";
import { IErrors } from "../Form/types";

class Field extends React.PureComponent<IFieldProps> {
  public static contextType = FormContext;

  private getError = (errors: IErrors): string =>
    errors && errors[this.props.id] ? errors[this.props.id].message : "";

  private handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { type, id } = this.props;
    const targetKey = type === "checkbox" ? "checked" : "value";
    this.context.setValues({ [id]: e.currentTarget[targetKey] });
  };

  private handleOnBlur = () => {
    const { id } = this.props;

    this.context.validate(id);
  };

  public render() {
    const { errors } = this.context;
    const { id, label, type = "text", ...value } = this.props;
    return (
      <div className="form-group">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          type={type}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          {...value}
        />
        {this.getError(errors) && (
          <div style={{ color: "red", fontSize: "80%" }}>
            <p>{this.getError(errors)}</p>
          </div>
        )}
      </div>
    );
  }
}

export { Field };
