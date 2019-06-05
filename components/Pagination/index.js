import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Pagination } from 'react-bootstrap'
import Typography from '@material-ui/core/Typography'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

export default class extends Component {
  static propTypes = {
    pagination: PropTypes.object,
    handlePagination: PropTypes.func
  }
  handleChangePage = (event, newPage) => {
    this.props.handlePagination({
      ...this.props.pagination,
      page: newPage + 1
    })
  }
  handleChangeRowsPerPage = event => {
    this.props.handlePagination({
      ...this.props.pagination,
      limit: parseInt(event.target.value, 10)
    })
  }
  render() {
    let { pagination } = this.props
    const { page, limit, total, pages } = pagination

    return (
      <Typography align="right" component="div">
        <TableFooter style={{ float: 'right' }}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[8, 12, 16]}
              count={total}
              rowsPerPage={limit}
              page={page - 1}
              SelectProps={{
                inputProps: { 'aria-label': 'Hiển thị' },
                native: true
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Typography>
    )
  }
}
