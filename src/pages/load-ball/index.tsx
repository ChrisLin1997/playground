import React, { useEffect, useState } from 'react'
import './style.css'

const LoadBall = () => {
  const [load, setLoad] = useState(0)
  useEffect(() => {
    const timerId = setInterval(() => {
      setLoad(prev => {
        if (prev + 1 === 100) clearInterval(timerId)
        return ++prev
      })
    }, 50)
    return () => clearInterval(timerId)
  }, [])


  return (
    <div className="wrap">
      <div className="load-ball">
        <div className="wave">
          <div className="before" style={{ marginBottom: load * 1.5 + 'px' }} />
          <div className="after" style={{ marginBottom: load * 1.5 + 10 + 'px' }} />
          <div className="percent">{load} %</div>
        </div>
      </div>
    </div>
  )
}

export default LoadBall