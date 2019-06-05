import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { getImageMovie, getMovieViewsCount } from '../../common/utils/helpers'
import Link from '../../components/Link'
import Paper from '@material-ui/core/Paper'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ReactDOM from 'react-dom'
import Fade from '@material-ui/core/Fade'
import fetchApi from '../../common/utils/fetchApi'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`
  },
  title: {
    // marginBottom: 30
  }
})

@withStyles(styles, { withTheme: true })
export default class EditVoiceover extends Component {
  state = {
    open: false,
    disabledCreateButton: true,
    newVoiceover: { value: 'hn_female_xuanthu_news_48k-hsmm', name: 'Nữ: Xuân Thu' },
    optionsVoiceovers: [
      { value: 'hn_male_xuantin_vdts_48k-hsmm', name: 'Nam: Xuân Tín' },
      { value: 'sg_male_xuankien_vdts_48k-hsmm', name: 'Nam: Xuân Kiên' },
      { value: 'sg_male_minhhoang_dial_48k-hsmm', name: 'Nam: Minh Hoàng' },
      { value: 'hn_female_xuanthu_news_48k-hsmm', name: 'Nữ: Xuân Thu' },
      { value: 'hn_female_thutrang_phrase_48k-hsmm', name: 'Nữ: Thu Trang' },
      { value: 'sg_female_xuanhong_vdts_48k-hsmm', name: 'Nữ: Xuân Hồng' },
      { value: 'sg_female_thaotrinh_dialog_48k-hsmm', name: 'Nữ: Thao Trinh' }
    ]
  }

  handleOpen = () => {
    this.setState({ open: true })
  }
  handleClose = () => {
    this.setState({ open: false })
  }
  handleChangeNewVoiceover = event => {
    this.setState({ newVoiceover: event.target.value })
    this.setState({ disabledCreateButton: false })
  }
  handleCreateVoiceover = async () => {
    const { movie, voiceovers = [] } = this.props
    const res = await fetchApi(`/voiceovers`, {
      method: 'POST',
      data: {
        movieId: movie._id,
        voice: this.state.newVoiceover.value,
        name: this.state.newVoiceover.name
      }
    })
  }
  handleReRequest = async requestId => {
    const res = await fetchApi(`/voiceovers/rerequest/${requestId}`)
  }
  render() {
    const { classes, theme, movie, voiceovers = [] } = this.props
    const { disabledCreateButton, newVoiceover, optionsVoiceovers = [] } = this.state

    return (
      <div>
        <Button color="primary" variant="outlined" onClick={this.handleOpen}>
          Quản lý thuyết minh ({voiceovers.length})
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <Typography variant="h6" id="modal-title" color="primary" align="center">
              {voiceovers.length ? 'Quản lý thuyết minh' : 'Chưa có thuyết minh'}
            </Typography>
            <br />
            <hr />
            <Grid container spacing={16}>
              <Grid item xs={6}>
                <Typography variant="subtitle1" color="textPrimary">
                  Tên giọng
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="subtitle1" color="textPrimary">
                  Trạng thái
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="textPrimary">
                  Yêu cầu
                </Typography>
              </Grid>
            </Grid>
            <hr />
            {voiceovers.length
              ? voiceovers.map(voiceover => {
                  return (
                    <Grid container spacing={16} key={voiceover._id}>
                      <Grid item xs={6}>
                        <Typography variant="body1" color="textPrimary">
                          {voiceover.name}
                        </Typography>
                      </Grid>

                      {voiceover.status === 'pending' && (
                        <React.Fragment>
                          <Grid item xs={3}>
                            <Typography variant="body1" color="textPrimary">
                              Đang xử lý
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Button
                              size="small"
                              variant="outlined"
                              color="primary"
                              onClick={() => this.handleReRequest(voiceover.requestId)}
                            >
                              Tổng hợp lại
                            </Button>
                          </Grid>
                        </React.Fragment>
                      )}
                      {voiceover.status === 'error' && (
                        <React.Fragment>
                          <Grid item xs={3}>
                            <Typography variant="body1" color="textPrimary">
                              Lỗi
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Button
                              size="small"
                              variant="outlined"
                              color="primary"
                              onClick={() => this.handleReRequest(voiceover.requestId)}
                            >
                              Tổng hợp lại
                            </Button>
                          </Grid>
                        </React.Fragment>
                      )}
                      {voiceover.status === 'done' && (
                        <React.Fragment>
                          <Grid item xs={3}>
                            <Typography variant="body1" color="textPrimary">
                              Hoàn tất
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Button
                              size="small"
                              variant="outlined"
                              color="primary"
                              onClick={() => this.handleReRequest(voiceover.requestId)}
                            >
                              Tổng hợp lại
                            </Button>
                          </Grid>
                        </React.Fragment>
                      )}
                    </Grid>
                  )
                })
              : null}

            <hr />
            <hr />
            <br />
            <Grid container spacing={16}>
              <Grid item xs={9}>
                <Typography variant="body1" color="textPrimary">
                  <FormControl fullWidth className={classes.formControl}>
                    <Select
                      value={newVoiceover || { name: 'Chọn giọng thuyết minh' }}
                      onChange={this.handleChangeNewVoiceover}
                      input={<OutlinedInput name="voiceover" id="outlined-age-simple" />}
                    >
                      {optionsVoiceovers.map((option, index) => {
                        return <MenuItem value={option}>{option.name}</MenuItem>
                      })}
                    </Select>
                  </FormControl>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  onClick={this.handleCreateVoiceover}
                  disabled={disabledCreateButton}
                >
                  Tạo mới
                </Button>
              </Grid>
            </Grid>
          </div>
        </Modal>
      </div>
    )
  }
}

EditVoiceover.propTypes = {
  voiceovers: PropTypes.array.isRequired
}

// withStyles(styles, { withTheme: true })(EditVoiceover)
