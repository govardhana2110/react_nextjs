import SampleHoc from '@/src/components/sampleHoc'
import React from 'react'

const HoverModule = ({ count, incrementCount }) => {
  return (
    <div>
      <button onMouseOver={incrementCount}>Hovered {count} times</button>
    </div>
  )
}

export default SampleHoc(HoverModule)
