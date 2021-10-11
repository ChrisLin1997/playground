import React from 'react'
import './style.css'

const style = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const CircleLoad = () => {
  return (
    <div style={style}>
      <svg style={{ width: '400px', height: '400px' }}>
        <circle className="circle" cx="200" cy="200" r="100" />
      </svg>

      <span className="circle-span">0 %</span>
    </div>
  )
}

export default CircleLoad