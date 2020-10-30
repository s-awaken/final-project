import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container'
import Input from '@material-ui/core/Input'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function EmployeesContainer(props) {
  const classes = useStyles()
  return (
    // <Container maxWidth="sm">
    //   <form>
    //     <Input defaultValue={props.name}/>
    //     <Input defaultValue={props.department} />
    //     <Input defaultValue={props.email} />
    //     <Button>Submit Changes</Button>
    //   </form>
    // </Container>
    <div>
      
    </div>
  )
}