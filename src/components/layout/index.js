import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5rem',
        color: 'black',
      }}
    >
      <div
        style={{
          background: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50vw',
          height: '90vh',
          borderRadius: '5%',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default MainLayout
