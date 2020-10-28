import React from 'react'

import Button from '@material-ui/core/Button'
export default function Profile(props) {
  return (
    <Button fullWidth={true}  onClick={props.onClick}>Profile</Button>
  )
}