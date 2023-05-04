import React from 'react'

interface VacationUser {
  name: string
  employeeNumber: string
  department: string
  position: string
  requestDate: string
}

function VacationUserTable({ user }: { user: VacationUser }) {
  return (
    <tr>
      <td>
        <input type="checkbox" name={`select-${user.employeeNumber}`} />
      </td>
      <td>{user.name}</td>
      <td>{user.employeeNumber}</td>
      <td>{user.department}</td>
      <td>{user.position}</td>
      <td>{user.requestDate}</td>
    </tr>
  )
}

export default VacationUserTable
