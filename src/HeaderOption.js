import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOption.css'

function HeaderOption({avatar, Icon , title}) {
  return (
    <div className="header__option">
      {Icon && <Icon className="headerOption__icon"/>}
      <h3 className="headerOption__title">{title}</h3>
      {avatar && <Avatar src={avatar}/>}
    </div>
  )
}

export default HeaderOption
