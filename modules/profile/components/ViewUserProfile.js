import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl'
import ButtonFriend from '../../../components/User/ButtonFriend'
import ButtonFollow from '../../../components/User/ButtonFollow'
import TextField from '@material-ui/core/TextField'

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

@withStyles(styles, { withTheme: true })
export default class ViewUserProfile extends Component {
  state = {}

  render() {
    const { classes, profile = {} } = this.props

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Grid container spacing={16}>
            <Grid item md={12}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={profile.avatarUrl} />
              </ButtonBase>
            </Grid>
            <Grid item md={12} container>
              <Grid item xs container direction="column" spacing={8}>
                <Grid item xs>
                  <Typography gutterBottom variant="h6" align="center">
                    Thông tin {profile.role === 'user' ? 'người dùng' : profile.role}
                  </Typography>

                  <FormControl margin="normal" required fullWidth>
                    <TextField
                      label="Tên"
                      type="text"
                      value={profile.name}
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                    <TextField
                      label="Giới tính"
                      type="text"
                      value={
                        (profile.gender === 0 && 'Khác') ||
                        (profile.gender === 1 && 'Nam') ||
                        (profile.gender === 2 && 'Nữ')
                      }
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </FormControl>
                </Grid>
                <br />
                <Grid item>
                  <Grid container spacing={24}>
                    <Grid item md={12} align="center">
                      <ButtonFriend user={profile} size="medium" />
                    </Grid>
                    <Grid item md={12} align="center">
                      <ButtonFollow user={profile} size="medium" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

ViewUserProfile.propTypes = {
  profile: PropTypes.object.isRequired
}
