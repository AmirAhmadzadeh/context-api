import React, { Component } from 'react'
import classes from '../sass/create_stream.module.scss';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../store/action/';


class CreateStream extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  renderError(meta) {

    if (meta.touched && meta.error) {
      return (
        <div className={classes.root_formGroup_error}>
          {meta.error}
        </div>
      )
    } else {
      return null;
    }

  }
  renderInput(formProps) {
    return (
      <div className={classes.root_formGroup}>
        <label className={classes.root_formGroup_label}>{formProps.label}</label>
        <div className={classes.root_formGroup_inpWrapper}>
          <input
            {...formProps.input}
            autoComplete='off'
            className={classes.root_formGroup_inpWrapper_inp}
          />
          {this.renderError(formProps.meta)}
        </div>
      </div>
    )
  }



  onSubmit(formValues) {
    // console.log(formValues);  
    this.props.createStream(formValues);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, invalid } = this.props;
    return (
      <form className={classes.root} onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name='title'
          component={this.renderInput}
          placeholder='title'
          label='Title'
        />
        <Field
          name='desc'
          component={this.renderInput}
          placeholder='description'
          label='Description'
        />

        <div className={classes.root_formGroup}>
          <button
            className={`${classes.root_btn_submit} ${classes.root_btn}`}
            type="submit"
            disabled={invalid || pristine || submitting}

          >
            Submit
        </button>
          <button
            type="button"
            className={`${classes.root_btn} ${classes.root_btn_clear}`}
            disabled={pristine || submitting}
            onClick={reset}>
            Clear Values
        </button>
        </div>
      </form>
    )
  }
}


const validate = formValues => {
  const errors = {};

  if (!formValues.title || formValues.title.length < 3) {
    errors.title = 'You must Enter a Valid Title';
  }
  if (!formValues.desc) {
    errors.desc = 'You must Enter a valid Description'
  }
  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(connect(null, {
  createStream
})(CreateStream)); 