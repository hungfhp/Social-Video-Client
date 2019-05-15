import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { connect } from 'react-redux'
import {
  change,
  Field,
  reduxForm,
  getFormValues,
  formValueSelector,
  SubmissionError
} from 'redux-form'
import FormControl from '@material-ui/core/FormControl'
import FieldGroup from '../../../components/Fields/FieldGroup'
import FieldSelect from '../../../components/Fields/FieldSelect'
import Loading from '../../../components/Loading'
import Button from '@material-ui/core/Button'
import _ from 'lodash'
import Dropzone from 'react-dropzone'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Tooltip from '@material-ui/core/Tooltip'
import { uploadFile } from '../../movie/action'
import { updateProfile } from '../action'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500
  },
  image: {
    width: '100%',
    height: 200
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: 200,
    height: 200,
    borderRadius: '50%'
  },
  buttonUploadAvatar: {
    position: 'absolute'
  },
  iconUpload: {
    fontSize: '50px',
    '&:hover': {
      color: theme.palette.text.secondary
    }
  }
})

const optionsGender = [
  {
    label: 'Nam',
    value: 1
  },
  {
    label: 'Nữ',
    value: 2
  },
  {
    label: 'Khác',
    value: 0
  }
]

const validate = values => {
  let errors = {}

  if (!values.name) {
    errors.name = 'Nhập tên'
  }
  // if (!values.embed) {
  //   errors.embed = 'Nhập phim'
  // }
  // if (!values.subUrl) {
  //   errors.subUrl = 'Nhập phụ đề phim'
  // }
  // if (!values.thumbnail_medium) {
  //   errors.thumbnail_medium = 'Nhập hình nền'
  // }

  return errors
}

const selector = formValueSelector('profile')
@reduxForm({
  form: 'profile',
  touchOnBlur: false,
  validate,
  shouldError: () => true
})
@connect(
  state => ({
    ...selector(state, 'name', 'gender', 'avatarUrl'),
    profileFromValues: getFormValues('profile')(state),
    common: state.common
    // avatarUrl: selector(state, 'name')
  }),
  { uploadFile, updateProfile }
)
@withStyles(styles, { withTheme: true })
export default class Settings extends Component {
  state = {
    uploadingAvatar: false
  }
  onSave = values => {
    console.log(values)
    this.props.updateProfile(null, this.props.profile._id, values)
  }
  uploadFile = async (path, file) => {
    let formData = new FormData()
    formData.append('file', file, file.name)
    this.setState({ uploadingAvatar: true })
    const uploadedFile = await this.props.uploadFile(path, formData)
    this.setState({ uploadingAvatar: false })
    return uploadedFile
  }
  onUploadAvatar = async (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length) {
      let uploaded = await this.uploadFile('image', acceptedFiles[0])
      this.props.dispatch(change('profile', 'avatarUrl', uploaded.url))
    }
  }
  onUploadFileRejected = files => {
    console.error('onUploadFileRejected: ', files)
  }
  UNSAFE_componentWillMount() {
    const { profile = {} } = this.props

    this.props.initialize(_.pick(profile, ['name', 'gender', 'avatarUrl']))
  }
  render() {
    const {
      classes,
      profile = {},
      profileFromValues = {},
      handleSubmit,
      pristine,
      reset,
      common,
      submitting
    } = this.props
    return (
      <React.Fragment>
        <form className={classes.root}>
          <Grid container spacing={16}>
            <Grid item md={12}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={profileFromValues.avatarUrl} />

                <Dropzone
                  onDrop={this.onUploadAvatar}
                  onDropRejected={this.onUploadFileRejected}
                  maxSize={10000000}
                >
                  {({ getRootProps, getInputProps, isDragActive }) => {
                    return (
                      <Tooltip title="Tải lên">
                        <div {...getRootProps()} className={classes.buttonUploadAvatar}>
                          <input {...getInputProps()} />
                          {/* <Button aria-label="Toggle password visibility"> */}
                          <CloudUploadIcon
                            color="disabled"
                            className={classes.iconUpload}
                            fontSize="large"
                          />
                          {/* </Button> */}
                        </div>
                      </Tooltip>
                    )
                  }}
                </Dropzone>
              </ButtonBase>
            </Grid>
            <Grid item md={12} container>
              <Grid item xs container direction="column" spacing={8}>
                <Grid item xs>
                  <Typography gutterBottom variant="h6" align="center">
                    Thông tin {profile.role}
                  </Typography>

                  <FormControl margin="normal" required fullWidth>
                    <Field label="Tên" name="name" type="text" component={FieldGroup} creatable />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                    <Field
                      label="Giới tính"
                      name="gender"
                      type="text"
                      component={FieldSelect}
                      selectedOption={optionsGender.filter(gender => {
                        return gender.value === profile.gender
                      })}
                      options={optionsGender}
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography style={{ cursor: 'pointer' }} align="center">
                    {profile._id === common.user._id && (
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit(this.onSave)}
                        disabled={submitting || pristine}
                      >
                        Lưu thay đổi
                      </Button>
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    )
  }
}

Settings.propTypes = {
  profile: PropTypes.object.isRequired
}
