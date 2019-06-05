import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues, SubmissionError } from 'redux-form'
import FieldGroup from '../../components/Fields/FieldGroup'
import { login, loginAction, openLoginPopup } from '../../common/action'
import fetchApi from '../../common/utils/fetchApi'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    // marginLeft: theme.spacing.unit * 3,
    // marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2)]: {
      width: '450px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    // marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
})

const validate = values => {
  let errors = {}
  if (
    !values.password ||
    (values.password && (values.password.length < 8 || values.password.length > 50))
  ) {
    errors.password = 'Độ dài mật khẩu từ 8 - 50'
  }
  if (!values.email) {
    errors.email = 'Nhập email'
  } else if (
    !/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(String(values.email.trim()))
  ) {
    errors.email = 'Email không hợp lệ'
  }
  return errors
}

@reduxForm({
  form: 'login',
  touchOnBlur: false,
  validate,
  shouldError: () => true
})
@connect(
  state => ({}),
  { login, loginAction, openLoginPopup }
)
class LoginForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      submitError: ''
    }
  }
  onLocalLogin = values => {
    values.email = values.email.trim()
    this.setState({ submitError: '' })
    fetchApi('/users/login', {
      method: 'POST',
      data: values
    })
      .then(response => {
        this.props.login(response)
        this.props.openLoginPopup(false)
      })
      .catch(error => {
        this.setState({
          submitError: error.response && error.response.data && error.response.data.message
        })
        new SubmissionError({ email: 'element.message' })
      })
  }

  onFbLogin = fbData => {
    fetchApi('/users/fb_login', {
      method: 'POST',
      data: fbData
    })
      .then(response => {
        this.props.login(response)
        this.props.openLoginPopup(false)
      })
      .catch(error => {
        this.setState({
          submitError: 'Xin vui lòng thử lại!'
        })
        new SubmissionError({ email: 'element.message' })
      })
  }

  componentClicked = () => {
    console.log('fb login')
  }

  render() {
    const { classes, handleSubmit, pristine, reset, submitting } = this.props

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Typography component="h1" variant="h5">
            <FacebookLogin
              appId="329324544364004"
              fields="name,email,picture,gender"
              onClick={this.componentClicked}
              callback={this.onFbLogin}
              render={renderProps => (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={renderProps.onClick}
                  className={classes.button}
                >
                  Facebook
                </Button>
              )}
            />
            {/* <FacebookLogin
              appId="329324544364004"
              fields="name,email,picture,gender"
              onClick={this.componentClicked}
              callback={this.onFbLogin}
              render={renderProps => (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={renderProps.onClick}
                  className={classes.button}
                >
                  Google
                </Button>
              )}
            /> */}
          </Typography>

          <Typography color="error" variant="body1">
            {this.state.submitError}
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <Field
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                component={FieldGroup}
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <Field
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                component={FieldGroup}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit(this.onLocalLogin)}
              disabled={submitting}
              type="submit"
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </main>
    )
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginForm)
