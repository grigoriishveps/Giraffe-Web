import React from 'react'
import closeIcon from '../images/close.png'

interface InfoTablo {
  value: number
  closeInfo: () => void
}

const InfoTablo = ({ value, closeInfo }: InfoTablo) => {
  const handleClickCloseButton = () => {
    closeInfo()
  }

  return (
    <div className="infoPage">
      <div>
        <h1>{value}%</h1>
        <span>Заполненность вольера</span>
        <button className="closeInfo" onClick={handleClickCloseButton}>
          <img src={closeIcon} />
        </button>
      </div>
      <div>
        <progress value={value} max="100"></progress>
        <button className="infoButton"> Информация</button>
      </div>
    </div>
  )
}

export default InfoTablo
