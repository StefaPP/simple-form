import * as React from "react";
import { validateInput, submitForm } from "../../actions";
import { IFormContext, IValues, IFormState, IFormProps } from "./types";
import { connect } from "react-redux";
import { FormContext } from "./context";
import { bindActionCreators, Dispatch } from "redux";
import { areAllFieldsValidated } from "../../utils/validation";

class Form extends React.Component<IFormProps & any, IFormState> {
  public readonly state: IFormState = {
    values: {}
  }

  private setValues = (values: IValues) => {
    this.setState({ values: { ...this.state.values, ...values } });
  };

  private handleValidation = (id: string) => {
    const { values } = this.state;
    const { fields } = this.props;

    this.props.validateInput({ values, fields, id });
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.submitForm(this.state.values);
  };

  public render() {
    const { errors, fields, submitMessage } = this.props;
    const context: IFormContext = {
      errors,
      setValues: this.setValues,
      validate: this.handleValidation
    };
    return (
      <FormContext.Provider value={context}>
        <form onSubmit={this.handleSubmit} noValidate={true}>
          <div className="container">
            {this.props.render()}
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={areAllFieldsValidated(fields, errors)}
              >
                Submit
              </button>
              {submitMessage}
            </div>
          </div>
        </form>
      </FormContext.Provider>
    );
  }
}

const mapStateToProps = (state: any) => ({
  errors: state.form.errors,
  submitMessage: state.form.submitMessage
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      validateInput,
      submitForm
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
