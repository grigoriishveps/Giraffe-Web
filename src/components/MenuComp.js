import React from 'react';
import './App.css';
import ContentPage from "./ContentPage";

import homeIcon from "./images/home.png";
import taskIcon from "./images/tasks.png"
import horseIcon from "./images/horse-head.png"
import userIcon from "./images/user-friends.png";
import confIcon from "./images/configIcon.png"
import toolsIcon from "./images/toolsIcon.png"
import avatarPhoto from "./images/Avatar2.png"

function MenuComp() {
  return (
      <div id="mainPage">
          <div id ="menu">
              <div className="avatarMenu">
                  <img src={avatarPhoto}/>
                  <div>
                      <h5>Ферма заслуженных жирафов</h5>
                      <h6>России и СНГ</h6>
                  </div>
              </div>

              <button className="menuButton"> <img src={homeIcon}/><span>Главная</span> </button>
              <button className="menuButton"> <img src={taskIcon}/><span>Управление</span></button>
              <button className="menuButton"> <img src={horseIcon}/><span>Жирафы</span> </button>
              <button className="menuButton"> <img src={userIcon}/><span>Сотрудники</span></button>
              <button className="menuButton"> <img src={confIcon}/><span>Настройки</span></button>
              <button className="menuButton"> <img src={toolsIcon}/><span>Поддержка</span></button>
          </div>
          <ContentPage/>

      </div>
  );

}
export default (MenuComp);
