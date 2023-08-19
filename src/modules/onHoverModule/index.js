import SampleHoc from '@/src/components/sampleHoc'
import { SampleContext } from '@/src/lib/context/sampleContext'
import React from 'react'

const HoverModule = ({ count, incrementCount }) => {
  const contextVal=SampleContext();
  return (
    <div>
      <button onMouseOver={incrementCount}>Hovered {count} times</button>
      <p>{contextVal}</p>
    </div>
  )
}

export default SampleHoc(HoverModule)
