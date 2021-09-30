import React, { useMemo, useRef, useState } from 'react'
import './App.css'

const itemHeight = 50

const preLoad = 5

const data = Array.from(Array(100).keys())

function App() {
  const containerNode = useRef<HTMLDivElement>(null)
  const viewHeight = useMemo(() => data.length * itemHeight, [])

  const [range, setRange] = useState({ start: 0, end: 15 })
  const calcRange = () => {
    if (containerNode.current) {
      const rangeOffset = Math.floor(containerNode.current.scrollTop / itemHeight) + 1
      const viewItemSize: number = Math.ceil(containerNode.current.clientHeight / itemHeight);

      const start = rangeOffset - preLoad
      const startSize = start < 0 ? 0 : start

      const end  =  rangeOffset + viewItemSize + preLoad
      const endSize = end > data.length ? data.length : end

      console.log(startSize)
      console.log(endSize)

      setRange({
        start: startSize,
        end: endSize,
      })
    }
  }

  const showData = useMemo(() => data.slice(range.start, range.end), [range])

  const offset = useMemo(() => (range.start) * itemHeight, [range.start]);



  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <div className="container" ref={containerNode} onScroll={calcRange}>
            <div style={{ marginTop: offset + 'px', height: viewHeight - offset + 'px' }}>
              { showData.map(item => <div key={item} style={{ marginBottom: '10px', height: '40px', backgroundColor: 'teal' }}>{ item }</div>) }
            </div>

        </div>
      </header>
    </div>
  )
}

export default App
