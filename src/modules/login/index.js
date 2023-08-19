import CommonTable from '@/src/components/table'
import MockDataService from '@/src/lib/services/loginService'
import React, { useState } from 'react'

const Login = () => {
  const [tableData, setTableData] = useState({ headers: [], body: [] })
  React.useEffect(() => {
    getDummyData()
  }, [])

  const higherComponent = (CommonTable) => {
    const HOC=()=><CommonTable headers={tableData.headers} body={tableData.body}/>
    return HOC
  }

  const RenderComponent = higherComponent(CommonTable)

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
      <RenderComponent/>
    </div>
  )
}

export default Login
