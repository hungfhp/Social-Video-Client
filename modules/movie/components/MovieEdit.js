import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '../../../components/Link'
import { pushRoute } from '../../../components/Link'
import MoviePlayer from '../../../components/Movie/MoviePlayer'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import { getImageMovie, getMovieViewsCount } from '../../../common/utils/helpers'
import { updateUrlParameter } from '../../../common/utils/url'
import Button from '@material-ui/core/Button'
import FieldGroup from '../../../components/Fields/FieldGroup'
import FieldSelectMutil from '../../../components/Fields/FieldSelectMutil'
import FieldSelect from '../../../components/Fields/FieldSelect'
import fetchApi from '../../../common/utils/fetchApi'
import { getOptionsGenres } from '../../../common/action'
import { uploadFile } from '../action'
import InputAdornment from '@material-ui/core/InputAdornment'
import Dropzone from 'react-dropzone'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { change } from 'redux-form'
import ClearIcon from '@material-ui/icons/Clear'
import Loading from '../../../components/Loading'

import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues, SubmissionError } from 'redux-form'

const MAX_SIZE_ATTACK_FILE = 10000000

const styles = theme => ({
  moviePlayer: {
    marginTop: theme.spacing.unit * 3
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  buttonUpload: {
    position: 'absolute',
    right: 0,
    bottom: 20
  },
  buttonUploadPhoto: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  playButton: {
    marginRight: 20
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  thumbnailChild: {
    width: '100%',
    paddingLeft: theme.spacing.unit * 4
  },
  fileUploadedItem: {
    margin: theme.spacing.unit
  }
})

const validate = values => {
  let errors = {}

  if (!values.name) {
    errors.name = 'Nhập tên phim'
  }
  if (!values.embed) {
    errors.embed = 'Nhập phim'
  }
  if (!values.subUrl) {
    errors.subUrl = 'Nhập phụ đề phim'
  }
  if (!values.thumbnail_medium) {
    errors.thumbnail_medium = 'Nhập hình nền'
  }

  return errors
}

@reduxForm({
  form: 'movieCreate',
  touchOnBlur: false,
  validate,
  enableReinitialize: true,
  shouldError: () => true
})
@connect(
  state => ({
    common: state.common
  }),
  { getOptionsGenres, uploadFile }
)
@withStyles(styles, { withTheme: true })
export default class MovieCreate extends Component {
  state = {
    subs: [],
    sub: { value: '', label: '' },
    subEn: { value: '', label: '' },
    thumbnails: { small: '', medium: '', large: '' },
    photos: [],
    submitError: ''
  }
  onSave = values => {
    const data = this.formatData(values)
    this.setState({ submitError: '' })
    fetchApi(`/movies/${this.props.movie._id}`, {
      method: 'PUT',
      data: {...movie, data}
    })
      .then(res => {
      const currentURL = window.location.href
      pushRoute(updateUrlParameter(`/movie/${res.data.data._id}`, 'action', 'view'))
      })
      .catch(error => {
        this.setState({
          submitError: error.response && error.response.data && error.response.data.message
        })
        new SubmissionError({ email: 'element.message' })
      })
  }
  formatData = data => {
    let initData = { quality: 'HD', share: 'public', isAdult: false }
    let photos = []
    photos.push(
      this.state.photos.length &&
        this.state.photos.map(photo => {
          return photo.value
        })
    )
    let formatData = {
      ...initData,
      ...data,
      embeds: [
        {
          embedUrl: data.embed,
          default: true
        }
      ],
      photos,
      thumbnails: {
        small: data.thumbnail_small || '',
        medium: data.thumbnail_medium || '',
        large: data.thumbnail_large || ''
      }
    }
    return formatData
  }
  handleChangeGenres = values => {}
  uploadFile = async (path, file) => {
    let formData = new FormData()
    formData.append('file', file, file.name)
    return await this.props.uploadFile(path, formData)
  }
  onUploadMovie = async (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length) {
      let uploaded = await this.uploadFile('subtitle', acceptedFiles[0])
      let movie = {
        value: uploaded.url,
        label: acceptedFiles[0].name
      }
      this.props.dispatch(change('movieCreate', 'embed', movie.value))
    }
  }
  onUploadSubtitle = async (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length) {
      let uploaded = await this.uploadFile('subtitle', acceptedFiles[0])
      let subs = this.state.subs
      let sub = {
        value: uploaded.url,
        label: acceptedFiles[0].name
      }
      subs.push(sub)
      this.setState({ subs, sub })
      this.props.dispatch(change('movieCreate', 'subUrl', sub.value))
    }
  }
  onUploadSubtitleEn = async (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length) {
      let uploaded = await this.uploadFile('subtitle', acceptedFiles[0])
      let subs = this.state.subs
      let subEn = {
        value: uploaded.url,
        label: acceptedFiles[0].name
      }
      subs.push(subEn)
      this.setState({ subs, subEn })
      this.props.dispatch(change('movieCreate', 'enSubUrl', subEn.value))
    }
  }
  onUploadThumbnails = async (acceptedFiles, rejectedFiles, type) => {
    if (acceptedFiles.length) {
      let uploaded = await this.uploadFile('image', acceptedFiles[0])
      let { thumbnails } = this.state
      thumbnails[type] = uploaded.url
      this.setState({ thumbnails })
      this.props.dispatch(change('movieCreate', 'thumbnail_' + type, uploaded.url))
    }
  }
  onUploadPhotos = async (acceptedFiles, rejectedFiles, index) => {
    if (acceptedFiles.length) {
      let url = await this.uploadFile('image', acceptedFiles[0])
      if (acceptedFiles.length) {
        acceptedFiles.map(async file => {
          let uploaded = await this.uploadFile('image', file)
          let photos = this.state.photos
          photos.push({ label: file.name, value: uploaded.url })
          this.setState({
            photos
          })
        })
      }
    }
  }

  onUploadFileRejected = files => {
    const { t, toastManager } = this.props
    console.log('onUploadFileRejected')
  }
  componentDidMount() {
    this.props.getOptionsGenres()
  }
  render() {
    const {
      classes,
      theme,
      movie = {},
      common,
      handleSubmit,
      pristine,
      reset,
      submitting
    } = this.props

    console.log(this.state)
    const optionsGenres = common.options.genres
    const optionsQuanlities = common.options.quanlities
    const optionsShares = common.options.shares
    const optionsAdults = [
      { label: 'Trên 18 tuổi', value: true },
      { label: 'Mọi người', value: false }
    ]

    return (
      <React.Fragment>
        {submitting ? (
          <Loading />
        ) : (
          <Typography color="primary" gutterBottom variant="h3">
            Tải lên phim mới
          </Typography>
        )}
        <form className={classes.form}>
          <Grid container spacing={theme.spacing.unit * 5}>
            <Grid item md={5}>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Tên phim *"
                  name="name"
                  type="text"
                  component={FieldGroup}
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Tên phim tiếng anh"
                  name="nameOrigin"
                  type="text"
                  component={FieldGroup}
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Thể loại"
                  name="genres"
                  type="text"
                  component={FieldSelectMutil}
                  // onChange={this.handleChangeGenres}
                  options={optionsGenres}
                  creatable
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Miêu tả về phim"
                  name="desc"
                  type="text"
                  multiline
                  component={FieldGroup}
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Tác giả"
                  name="directors"
                  type="text"
                  component={FieldSelectMutil}
                  // onChange={this.handleChangeGenres}
                  options={[]}
                  creatable
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Diễn viên"
                  name="actors"
                  type="text"
                  component={FieldSelectMutil}
                  // onChange={this.handleChangeGenres}
                  options={[]}
                  creatable
                  autoFocus
                />
              </FormControl>
              <Grid item container justify="space-between" spacing={theme.spacing.unit * 2}>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <Field
                      label="Thời lượng"
                      name="duration"
                      type="number"
                      component={FieldGroup}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">phút</InputAdornment>
                      }}
                      autoFocus
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <Field
                      label="Khởi chiếu"
                      name="year"
                      type="number"
                      component={FieldGroup}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Năm</InputAdornment>
                      }}
                      autoFocus
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <Field
                      label="Chất lượng"
                      name="quality"
                      type="text"
                      component={FieldSelect}
                      // onChange={this.handleChangeGenres}
                      selectedOption={optionsQuanlities[1]}
                      options={optionsQuanlities}
                      autoFocus
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <Field
                      label="Chia sẻ với"
                      name="share"
                      type="text"
                      component={FieldSelect}
                      // onChange={this.handleChangeGenres}
                      selectedOption={optionsShares[2]}
                      options={optionsShares}
                      autoFocus
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <Field
                      label="Giới hạn tuổi"
                      name="isAdult"
                      type="text"
                      // onChange={this.handleChangeGenres}
                      component={FieldSelect}
                      selectedOption={optionsAdults[1]}
                      options={optionsAdults}
                      autoFocus
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={7}>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Đường dẫn phim *"
                  name="embed"
                  type="text"
                  component={FieldGroup}
                  autoFocus
                />
                <Dropzone
                  onDrop={this.onUploadMovie}
                  onDropRejected={this.onUploadFileRejected}
                  maxSize={3000000000}
                >
                  {({ getRootProps, getInputProps, isDragActive }) => {
                    return (
                      <Typography
                        component="div"
                        className={classes.buttonUpload}
                        inline
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <Button aria-label="Toggle password visibility">
                          <CloudUploadIcon />
                        </Button>
                      </Typography>
                    )
                  }}
                </Dropzone>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Phụ đề việt (đường dẫn hoặc file) *"
                  name="subUrl"
                  type="text"
                  component={FieldGroup}
                  autoFocus
                />
                <Dropzone
                  onDrop={this.onUploadSubtitle}
                  onDropRejected={this.onUploadFileRejected}
                  maxSize={10000000}
                >
                  {({ getRootProps, getInputProps, isDragActive }) => {
                    return (
                      <Typography
                        component="div"
                        className={classes.buttonUpload}
                        inline
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <Button aria-label="Toggle password visibility">
                          <CloudUploadIcon />
                        </Button>
                      </Typography>
                    )
                  }}
                </Dropzone>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Phụ đề tiếng anh"
                  name="enSubUrl"
                  type="text"
                  component={FieldGroup}
                  autoFocus
                />
                <Dropzone
                  onDrop={this.onUploadSubtitleEn}
                  onDropRejected={this.onUploadFileRejected}
                  maxSize={10000000}
                >
                  {({ getRootProps, getInputProps, isDragActive }) => {
                    return (
                      <Typography
                        component="div"
                        className={classes.buttonUpload}
                        inline
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <Button aria-label="Toggle password visibility">
                          <CloudUploadIcon />
                        </Button>
                      </Typography>
                    )
                  }}
                </Dropzone>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Đường dẫn trailer"
                  name="trailerUrl"
                  type="text"
                  component={FieldGroup}
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Typography color="textSecondary" variant="body1">
                  Hình nền *
                </Typography>

                <FormControl margin="none" required fullWidth className={classes.thumbnailChild}>
                  <Field
                    label="Nhỏ"
                    name="thumbnail_small"
                    type="text"
                    component={FieldGroup}
                    autoFocus
                  />
                  <Dropzone
                    onDrop={(accepted, rejected) =>
                      this.onUploadThumbnails(accepted, rejected, 'small')
                    }
                    onDropRejected={this.onUploadFileRejected}
                    maxSize={10000000}
                  >
                    {({ getRootProps, getInputProps, isDragActive }) => {
                      return (
                        <Typography
                          component="div"
                          className={classes.buttonUpload}
                          inline
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <Button aria-label="Toggle password visibility">
                            <CloudUploadIcon />
                          </Button>
                        </Typography>
                      )
                    }}
                  </Dropzone>
                </FormControl>
                <FormControl margin="none" required fullWidth className={classes.thumbnailChild}>
                  <Field
                    label="Vừa * "
                    name="thumbnail_medium"
                    type="text"
                    component={FieldGroup}
                    autoFocus
                  />
                  <Dropzone
                    onDrop={(accepted, rejected) =>
                      this.onUploadThumbnails(accepted, rejected, 'medium')
                    }
                    onDropRejected={this.onUploadFileRejected}
                    maxSize={10000000}
                  >
                    {({ getRootProps, getInputProps, isDragActive }) => {
                      return (
                        <Typography
                          component="div"
                          className={classes.buttonUpload}
                          inline
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <Button aria-label="Toggle password visibility">
                            <CloudUploadIcon />
                          </Button>
                        </Typography>
                      )
                    }}
                  </Dropzone>
                </FormControl>
                <FormControl margin="none" required fullWidth className={classes.thumbnailChild}>
                  <Field
                    label="Lớn"
                    name="thumbnail_large"
                    type="text"
                    component={FieldGroup}
                    autoFocus
                  />
                  <Dropzone
                    onDrop={(accepted, rejected) =>
                      this.onUploadThumbnails(accepted, rejected, 'large')
                    }
                    onDropRejected={this.onUploadFileRejected}
                    maxSize={10000000}
                  >
                    {({ getRootProps, getInputProps, isDragActive }) => {
                      return (
                        <Typography
                          component="div"
                          className={classes.buttonUpload}
                          inline
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <Button aria-label="Toggle password visibility">
                            <CloudUploadIcon />
                          </Button>
                        </Typography>
                      )
                    }}
                  </Dropzone>
                </FormControl>
              </FormControl>
              {this.state.photos.map((photo, idex) => {
                return
                ;<FormControl margin="normal" required fullWidth>
                  <Field
                    label="Ảnh"
                    name={'photos_' + index}
                    type="text"
                    component={FieldGroup}
                    autoFocus
                  />
                  <Dropzone
                    onDrop={this.onUploadPhotos}
                    onDropRejected={this.onUploadFileRejected}
                    maxSize={10000000}
                  >
                    {({ getRootProps, getInputProps, isDragActive }) => {
                      return (
                        <Typography
                          component="div"
                          className={classes.buttonUpload}
                          inline
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <Button aria-label="Toggle password visibility">
                            <CloudUploadIcon />
                          </Button>
                        </Typography>
                      )
                    }}
                  </Dropzone>
                </FormControl>
              })}
              <FormControl margin="normal" required fullWidth>
                <Typography color="textSecondary" variant="body1">
                  Ảnh
                </Typography>

                <Dropzone
                  onDrop={this.onUploadPhotos}
                  onDropRejected={this.onUploadFileRejected}
                  maxSize={10000000}
                >
                  {({ getRootProps, getInputProps, isDragActive }) => {
                    return (
                      <Typography
                        component="div"
                        className={classes.buttonUploadPhoto}
                        inline
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <Button aria-label="Toggle password visibility">
                          <CloudUploadIcon />
                        </Button>
                      </Typography>
                    )
                  }}
                </Dropzone>
              </FormControl>
              {this.state.photos.length
                ? this.state.photos.map((photo, index) => {
                    return (
                      <Button key={index} variant="outlined" className={classes.fileUploadedItem}>
                        {photo.label}
                        <ClearIcon className={classes.rightIcon} />
                      </Button>
                    )
                  })
                : null}
            </Grid>
          </Grid>
          <Typography align="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit(this.onSave)}
              disabled={submitting}
              size="large"
            >
              Lưu chỉnh sửa
            </Button>
          </Typography>
        </form>
      </React.Fragment>
    )
  }
}

MovieCreate.propTypes = {
  movie: PropTypes.object.isRequired
}
