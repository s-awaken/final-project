import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'

export default function Logout(props) {
  const dispatch = useDispatch()
  
  const logout = (event) => {
    event.preventDefault()
    dispatch(props.action.logOut())
    localStorage.removeItem("user")
  }

  return (
    <Button onClick={logout} >Logout </Button>
  )
}