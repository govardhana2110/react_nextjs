import MainLayout from '@/src/components/layout'
import Dashboard from '@/src/modules/dashboard'
import Login from '@/src/modules/login'

import React from 'react'

const LoginPage = () => {
  return (
    <>
      <MainLayout>
        <Login />
       <Dashboard/>
      </MainLayout>
    </>
  )
}

export default LoginPage
