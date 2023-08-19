import React, { useState } from 'react'

const SampleHoc = (OriginalComp) => {
  const NewComp = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
      setCount((prev) => prev + 1)
    }
    return (
      <OriginalComp
        incrementCount={incrementCount}
        count={count}
      ></OriginalComp>
    )
  }
  return NewComp
}

export default SampleHoc
