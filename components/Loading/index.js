import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography } from '@material-ui/core'

const styles = theme => ({
  progress: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1.5,
    marginLeft: theme.spacing.unit * 2.5,
    marginRight: theme.spacing.unit * 2.5
  }
})

function CircularIndeterminate(props) {
  const {
    classes,
    loading,
    size = 20,
    thickness = 4,
    inline = false,
    align = 'center',
    className
  } = props
  if (!loading) return null
  return (
    <Typography component="div" inline={inline} align={align} className={className}>
      <CircularProgress size={size} thickness={thickness} className={classes.progress} />
    </Typography>
  )
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CircularIndeterminate)
