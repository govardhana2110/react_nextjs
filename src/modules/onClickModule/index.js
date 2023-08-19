import SampleHoc from '@/src/components/sampleHoc'
import React from 'react'
import OnHoverModule from '../onHoverModule'

const ClickModule = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>clicked {count} times</button>
     
      <OnHoverModule/>
     
    </div>
  )
}

export default SampleHoc(ClickModule)
