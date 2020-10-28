import React from 'react'

import Button from '@material-ui/core/Button'

export default function EmployeesButton(props) {
  return (
    <Button fullWidth={true}  onClick={props.onClick}>Employees</Button>
  )
}