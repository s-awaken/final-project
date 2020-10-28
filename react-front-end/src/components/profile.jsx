import React from 'react'

import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'

export default function Profile(props) {
  return (
    <div>
      <List component="nav" aria-label="profile">
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="User"/>
            {props.generalInfo.name}
          </ListItemAvatar>
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start" >
          <ListItem>
            General Info
          </ListItem>
          <Divider />
          <ListItem>
              Department - {props.generalInfo.department}
          </ListItem>
          <ListItem>
            KPI
            <ListItem>
              
            </ListItem>
          </ListItem>
        </ListItem>
      </List>
    </div>
  )
}