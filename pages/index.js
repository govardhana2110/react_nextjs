import MainLayout from '@/src/components/layout'
import Login from '@/src/modules/login'
import OnClickModule from '@/src/modules/onClickModule'
import OnHoverModule from '@/src/modules/onHoverModule'
import React from 'react'

const LoginPage = () => {
  return (
    <>
      <MainLayout>
        {/* <Login /> */}
        <OnClickModule/>&nbsp;&nbsp;
        <OnHoverModule/>
      </MainLayout>
    </>
  )
}

export default LoginPage
