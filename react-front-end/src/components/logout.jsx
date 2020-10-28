import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles((theme) => ({
  root: {
    '$ > *': {
      margin: theme.spacing(1),
    },
  }
}))

export default function Login() {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <Input defaultValue="Login" inputProps={{ 'aria-label': 'description' }}/>
    </form>
  )
}