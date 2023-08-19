import CommonTable from '@/src/components/table'
import MockDataService from '@/src/lib/services/loginService'
import React, { useState } from 'react'

const Login = () => {
  const [tableData, setTableData] = useState({ headers: [], body: [] })
  React.useEffect(() => {
    getDummyData()
  }, [])

  const higherComponent = (WrpComp) => {
    const HOC=()=><WrpComp headers={tableData.headers} body={tableData.body}/>
    return HOC
  }

  const RenderHoc = higherComponent(CommonTable)

  const getDummyData = async () => {
    try {
      const response = await MockDataService()
      if (response) console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <RenderHoc/>
    </div>
  )
}

export default Login
