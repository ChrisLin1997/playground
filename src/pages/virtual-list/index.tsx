import React, { useMemo, useRef, useState } from 'react'

const itemHeight = 50
const preLoad = 5
const data = Array.from(Array(500).keys())

const VirtualList = () => {
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

      setRange({
        start: startSize,
        end: endSize,
      })
    }
  }

  const showData = useMemo(() => data.slice(range.start, range.end), [range])

  const offset = useMemo(() => (range.start) * itemHeight, [range.start]);

  return (
    <div ref={containerNode} onScroll={calcRange} style={{
      width: '100%',
      height: '500px',
      overflow: 'auto',
      backgroundColor: 'cadetblue',
    }}>
      <div style={{ marginTop: offset + 'px', height: viewHeight - offset + 'px' }}>
        { showData.map(item => <div key={item} style={{ display: 'inline-block', margin: '5px 0', width: '100%',height: '40px', backgroundColor: 'teal' }}>{ item }</div>) }
      </div>
    </div>
  )
}

export default VirtualList
