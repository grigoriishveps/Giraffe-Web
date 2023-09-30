import React from 'react'
import closeIcon from '@images/close.png'
import { connect } from 'react-redux'
import mapStateToProps from './store/mapStateToProps'
import mapDispatchToProps from './store/mapDispatchToProps'

interface LogComp {
  closeLog: () => void
}

const LogComp = ({ closeLog }: LogComp) => {
  const state = {
    data: [
      {
        data: 'Июль',
        action: 'Обновление',
        name: 'Боря',
        status: 'Выполнено'
      },
      {
        data: '20 апреля',
        action: 'Новый Жираф',
        name: 'Инокентий',
        status: 'Ожидается'
      },
      {
        data: '20 апреля 2020',
        action: 'Редактировать',
        name: 'Шнур',
        status: 'Ожидается'
      },
      {
        data: '15 апреля 2020',
        action: 'Удалить',
        name: 'Ракета',
        status: 'Ожидается'
      }
    ]
  }

  const handleClickCloseButton = () => {
    closeLog()
  }

  const info = state.data.map((item) => (
    <>
      <h6>{item.data}</h6>
      <h6>{item.action}</h6>
      <h6>{item.name}</h6>
      <h6>{item.status}</h6>
    </>
  ))

  return (
    <div className="logComp">
      <div className="logHead">
        <h3> Обновления </h3>
        <button onClick={handleClickCloseButton}>
          <img src={closeIcon} />
        </button>
      </div>
      <div className="logBody">
        <h5>Дата</h5>
        <h5>Действие</h5>
        <h5>Жираф</h5>
        <h5>Статус</h5>
        {info}
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps('LogComp'),
  mapDispatchToProps('LogComp')
)(LogComp)
