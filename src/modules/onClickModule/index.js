import SampleHoc from '@/src/components/sampleHoc'
import React from 'react'

const ClickModule = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>clicked {count} times</button>
    </div>
  )
}

export default SampleHoc(ClickModule)
