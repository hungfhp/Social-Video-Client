import React from 'react'
import './style.scss'
export default ({ loading }) => {
  if (!loading) return null
  return (
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  )
}
