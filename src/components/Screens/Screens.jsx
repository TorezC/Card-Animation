import React from 'react'

const Screens = ({ScreenName, ...props}) => {
  return (
    <div className='top-bottom' {...props}>
        <h1>{ScreenName}</h1>
    </div>
  )
}

export default Screens