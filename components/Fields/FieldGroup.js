import React, { Component } from 'react'
// import InputGroup from 'react-bootstrap/lib/InputGroup'
// import FormGroup from 'react-bootstrap/lib/FormGroup'
// import ControlLabel from 'react-bootstrap/lib/ControlLabel'
// import FormControl from 'react-bootstrap/lib/FormControl'
import classnames from 'classnames'
// import Error from './Error'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

export default class extends Component {
  getValidationState = meta => {
    const input = this.props.input || {}
    if (meta.touched && meta.error) return 'error'
    if (!meta.error && input.value) return 'success'
    return null
  }
  render() {
    const {
      id,
      input,
      onKeyUp,
      meta,
      label,
      type = 'text',
      disabled,
      autoFocus,
      placeholder,
      leftIcon,
      rightIcon,
      autoComplete,
      classes={}
    } = this.props
    const isError = !!(meta.touched && meta.error)
    return (
      <FormControl className={classes.formControl} error={isError}>
      <InputLabel className={classes.inputLabel}  htmlFor={isError ? "component-error" : type }>{label}</InputLabel>
      <Input
        {...input}
        onKeyUp={onKeyUp}
        type={type}
        disabled={disabled}
        autoFocus={autoFocus}
        placeholder={placeholder}
        className={classes.input}
        autoComplete={autoComplete}
        aria-describedby="component-error-text"
      />

      <FormHelperText className={classes.formHelperText} >{isError&& meta.error}</FormHelperText>
    </FormControl>
    )
  }
}
