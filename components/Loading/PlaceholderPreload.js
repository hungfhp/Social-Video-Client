import React from 'react'
export default ({ lineCount = 5 }) => {
  let holders = []
  while (holders.length <= lineCount) {
    holders.push(
      <div key={holders.length} className="media">
        <div className="media-left">
          <div className="preload-img animated-placeholder" />
        </div>
        <div className="media-body">
          <p style={{ width: '30%' }} className="preload-p animated-placeholder" />
          <p style={{ width: '80%' }} className="preload-p animated-placeholder" />
          <p className="preload-p animated-placeholder" />
          <p style={{ width: '50%' }} className="preload-p animated-placeholder" />
        </div>
        <p className="preload-p animated-placeholder" />
      </div>
    )
  }
  return <div className="place-holder-preload">{holders}</div>
}
