import React from 'react'
import '../App.css'
import ContentPage from 'src/components/ContentPage'

import homeIcon from '@images/home.png'
import horseIcon from '@images/horse-head.png'
import userIcon from '@images/user-friends.png'
import taskIcon from '@images/tasks.png'
import confIcon from '@images/configIcon.png'
import toolsIcon from '@images/toolsIcon.png'
import avatarPhoto from '@images/Avatar2.png'
import MenuItem from '../ui/MenuItem'

const MenuComp = () => {
  return (
    <div id="mainPage">
      <div id="menu">
        <div className="avatarMenu">
          <img src={avatarPhoto} />
          <div>
            <h5>Ферма заслуженных жирафов</h5>
            <h6>России и СНГ</h6>
          </div>
        </div>
        <MenuItem icon={homeIcon}>Главная</MenuItem>
        <MenuItem icon={taskIcon}>Управление</MenuItem>
        <MenuItem icon={horseIcon}>Жирафы</MenuItem>
        <MenuItem icon={userIcon}>Сотрудники</MenuItem>
        <MenuItem icon={confIcon}>Настройки</MenuItem>
        <MenuItem icon={toolsIcon}>Поддержка</MenuItem>
      </div>
      <ContentPage />
    </div>
  )
}

export default MenuComp
