import React from 'react'

const CommonTable = ({ headers, body }) => {
  return (
    <div>
      <table>
        <th>
          {headers?.map((item, index) => {
            return <td key={index}>{item}</td>
          })}
        </th>
        {body?.map((item, index) => {
          return (
            <tr key={index}>
              {Object.keys(item).map((key, idx) => {
                return <td key={idx}>{item[key]}</td>
              })}
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default CommonTable
