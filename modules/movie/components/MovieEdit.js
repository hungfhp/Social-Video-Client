import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '../../../components/Link'
import { pushRoute } from '../../../components/Link'
// import MoviePlayer from '../../../components/Movie/MoviePlayer'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
// import { getImageMovie, getMovieViewsCount } from '../../../common/utils/helpers'
import { updateUrlParameter } from '../../../common/utils/url'
// import PropTypes from 'prop-types'
// import PlayArrowIcon from '@material-ui/icons/PlayArrow'
// import IconButton from '@material-ui/core/IconButton'
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
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues, SubmissionError } from 'redux-form'
import { getMovieById } from '../action'
import EditVoiceover from '../../../components/Voiceover/EditVoiceover'

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
    margin: '0px 10px -5px -10px',
    paddingTop: '5px',
    position: 'absolute',
    top: '0'
  },
  thumbnailChild: {
    width: '100%',
    paddingLeft: theme.spacing.unit * 4
  },
  fileUploadedItem: {
    margin: theme.spacing.unit,
    width: '100px',
    height: 60,
    display: 'inline-block'
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
  shouldError: () => true
})
@connect(
  state => ({
    common: state.common
  }),
  { getOptionsGenres, uploadFile, getMovieById }
)
@withStyles(styles, { withTheme: true })
export default class MovieCreate extends Component {
  state = {
    subs: [],
    sub: { value: '', label: '' },
    subEn: { value: '', label: '' },
    thumbnails: { small: '', medium: '', large: '' },
    photos: [],
    submitError: '',
    uploadingMovie: false,
    uploadingSub: false,
    submitting: false
  }
  onSave = values => {
    const { movie = {} } = this.props
    const data = this.formatData(values)
    this.setState({ submitError: '' })
    this.setState({ submitting: true })
    fetchApi(`/movies/${movie._id}`, {
      method: 'PUT',
      data
    })
      .then(res => {
        this.setState({ submitting: false })
        this.props.enqueueSnackbar('Chỉnh sửa thành công.', { variant: 'success' })
        this.props.getMovieById(movie._id)
        pushRoute(updateUrlParameter(`/movie/${movie._id}`, 'action', 'view'))
      })
      .catch(error => {
        this.setState({ submitting: false })
        this.setState({
          submitError: error.response && error.response.data && error.response.data.message
        })
        this.props.enqueueSnackbar('Có lỗi xảy ra', { variant: 'warning' })
        new SubmissionError({ email: 'element.message' })
      })
  }
  formatData = data => {
    let photos = []

    this.state.photos.length &&
      this.state.photos.map(photo => {
        photos.push(photo.value)
      })

    let formatData = {
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
    const uploadedFile = await this.props.uploadFile(path, formData)
    return uploadedFile
  }
  onUploadMovie = async (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length) {
      this.setState({ uploadingMovie: true })
      let uploaded = await this.uploadFile('movie', acceptedFiles[0])
      this.setState({ uploadingMovie: false })
      let movie = {
        value: uploaded.url,
        label: acceptedFiles[0].name
      }
      this.props.dispatch(change('movieCreate', 'embed', movie.value))
    }
  }
  onUploadSubtitle = async (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length) {
      this.setState({ uploadingSub: true })
      let uploaded = await this.uploadFile('subtitle', acceptedFiles[0])
      this.setState({ uploadingSub: false })
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
      if (acceptedFiles.length) {
        acceptedFiles.map(async file => {
          let uploaded = await this.uploadFile('image', file)
          let photos = this.state.photos || []
          photos.push({ label: file.name, value: uploaded.url })
          this.setState({
            photos
          })
        })
      }
    }
  }
  onRemovePhoto = index => {
    let { photos } = this.state

    photos.splice(index, 1)
    this.setState({ photos })
  }

  onUploadFileRejected = files => {
    console.log('onUploadFileRejected')
  }
  handleInitData = () => {
    let initData = {}
    const { movie = {} } = this.props
    initData = { ...movie }
    initData.embed = (movie.embeds.length && movie.embeds[0].embedUrl) || ''
    initData.thumbnail_small = movie.thumbnails.small || ''
    initData.thumbnail_medium = movie.thumbnails.medium || ''
    initData.thumbnail_large = movie.thumbnails.large || ''
    const photos =
      movie.photos.length &&
      movie.photos.map((photo, index) => {
        return { label: `Ảnh ${index + 1}`, value: photo }
      })
    this.setState({ photos })
    this.props.initialize(initData)
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.movie.uploadedAt !== this.props.movie.uploadedAt) {
      this.handleInitData()
    }
  }
  componentDidMount() {
    this.props.getOptionsGenres()
    this.handleInitData()
  }
  render() {
    const { classes, theme, movie = {}, common, handleSubmit, pristine, reset } = this.props
    const { uploadingMovie, uploadingSub, submitting } = this.state

    const optionsGenres = common.options.genres
    const optionsQualities = common.options.quanlities
    const optionsShares = common.options.shares
    const optionsAdults = [
      { label: 'Trên 18 tuổi', value: true },
      { label: 'Mọi người', value: false }
    ]

    const selectedGenres = movie.genres.length
      ? movie.genres.map(genre => {
          return {
            value: genre,
            label: genre
          }
        })
      : []

    const selectedActors = movie.actors.length
      ? movie.actors.map(genre => {
          return {
            value: genre,
            label: genre
          }
        })
      : []

    const selectedDirectors = movie.directors.length
      ? movie.directors.map(genre => {
          return {
            value: genre,
            label: genre
          }
        })
      : []

    const selectedCountries = movie.countries.length
      ? movie.countries.map(genre => {
          return {
            value: genre,
            label: genre
          }
        })
      : []

    console.log(movie)
    return (
      <React.Fragment>
        <Typography color="textPrimary" gutterBottom variant="h4">
          Chỉnh sửa phim:{' '}
          <Link color="primary" href={`/movie/${movie._id}`}>
            {movie.name}
          </Link>
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={theme.spacing.unit * 5}>
            <Grid item md={5}>
              <FormControl margin="normal" required fullWidth>
                <Field label="Tên phim *" name="name" type="text" component={FieldGroup} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Tên phim tiếng anh"
                  name="nameOrigin"
                  type="text"
                  component={FieldGroup}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Thể loại"
                  name="genres"
                  type="text"
                  component={FieldSelectMutil}
                  selectedOptions={selectedGenres}
                  options={optionsGenres}
                  creatable
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Miêu tả về phim"
                  name="desc"
                  type="text"
                  multiline
                  component={FieldGroup}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Tác giả"
                  name="directors"
                  type="text"
                  component={FieldSelectMutil}
                  selectedOptions={selectedDirectors}
                  options={[]}
                  creatable
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Diễn viên"
                  name="actors"
                  type="text"
                  component={FieldSelectMutil}
                  selectedOptions={selectedActors}
                  options={[]}
                  creatable
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Quốc gia"
                  name="countries"
                  type="text"
                  component={FieldSelectMutil}
                  selectedOptions={selectedCountries}
                  options={[]}
                  creatable
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
                      selectedOption={optionsQualities.find(quality => {
                        return quality.value === movie.quality
                      })}
                      options={optionsQualities}
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
                      selectedOption={optionsShares.find(share => {
                        return share.value === movie.share
                      })}
                      options={optionsShares}
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
                      selectedOption={optionsAdults.find(isAdult => {
                        return isAdult.value === movie.isAdult
                      })}
                      options={optionsAdults}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={7}>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Nguồn phim *"
                  name="embed"
                  type="text"
                  component={FieldGroup}
                  disabled={uploadingMovie}
                />
                {/* {this.state.uploadingMovie ? (
                  <Loading loading={this.state.uploadingMovie} className={classes.buttonUpload} />
                ) : (
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
                        <Button aria-label="Tải lên tệp">
                            <CloudUploadIcon />
                          </Button>
                        </Typography>
                      )
                    }}
                  </Dropzone>
                )} */}
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Phụ đề việt *"
                  name="subUrl"
                  type="text"
                  component={FieldGroup}
                  disabled={uploadingSub}
                />
                <Dropzone
                  accept=".srt,.json"
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
                        <Button aria-label="Tải lên tệp">
                          <CloudUploadIcon />
                        </Button>
                      </Typography>
                    )
                  }}
                </Dropzone>
              </FormControl>
              {/* <FormControl margin="normal" required fullWidth>
                <Field
                  label="Phụ đề tiếng anh"
                  name="enSubUrl"
                  type="text"
                  component={FieldGroup}
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
                        <Button aria-label="Tải lên tệp">
                          <CloudUploadIcon />
                        </Button>
                      </Typography>
                    )
                  }}
                </Dropzone>
              </FormControl> */}
              <FormControl margin="normal" required fullWidth>
                <Field
                  label="Đường dẫn trailer"
                  name="trailerUrl"
                  type="text"
                  component={FieldGroup}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Typography color="textSecondary" variant="body1">
                  Hình nền *
                </Typography>

                <FormControl margin="none" required fullWidth className={classes.thumbnailChild}>
                  <Field label="Nhỏ" name="thumbnail_small" type="text" component={FieldGroup} />
                  <Dropzone
                    accept="image/*"
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
                  />
                  <Dropzone
                    accept="image/*"
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
                  <Field label="Lớn" name="thumbnail_large" type="text" component={FieldGroup} />
                  <Dropzone
                    accept="image/*"
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

              <FormControl margin="normal" required fullWidth>
                <Typography color="textSecondary" variant="body1">
                  Ảnh
                </Typography>

                <Dropzone
                  accept="image/*"
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
                      <Typography
                        component="div"
                        align="center"
                        key={index}
                        style={{ position: 'relative', width: '140px', display: 'inline-block' }}
                      >
                        <div
                          className={classes.fileUploadedItem}
                          style={{
                            backgroundImage: `url('${photo.value}')`,
                            backgroundSize: 'cover'
                          }}
                        />
                        <ClearIcon
                          onClick={() => this.onRemovePhoto(index)}
                          className={classes.rightIcon + ' clickable'}
                        />
                      </Typography>
                    )
                  })
                : null}

              <Grid item xs={12} align="center">
                <br />
                <br />
                <br />
                <EditVoiceover movie={movie} voiceovers={movie.voiceovers} />
              </Grid>
            </Grid>
          </Grid>
          <Typography align="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit(this.onSave)}
              disabled={submitting || pristine}
              size="large"
            >
              Lưu thay đổi
            </Button>
          </Typography>
        </form>
      </React.Fragment>
    )
  }
}

MovieCreate.propTypes = {}
