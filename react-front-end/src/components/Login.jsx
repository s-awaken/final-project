import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default function Login (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(props.action.setUser())
  }

  return (<div >
    <Paper >
      <form onSubmit={handleLogin} >
        <Input
          value={email}
          onInput={e => setEmail(e.target.value)}

        />
        <Input
          value={password}
          onInput={e => setPassword(e.target.value)}
        />
        <Typography />
        <Button
          type="submit"
        >
          Login
                    </Button>
      </form>
    </Paper>
  </div>
  );
}