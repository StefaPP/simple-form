import React, { PureComponent } from "react";

type TInputType = "text" | "checkbox";

interface IFieldProps {
  label: string;
  id: string;
  type?: TInputType;
  value?: string;
  checked?: boolean;
}

class Field extends React.PureComponent<IFieldProps> {

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
        ></input>
      </div>
    );
  }
}
