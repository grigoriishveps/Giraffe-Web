import React from 'react'

import axios from 'axios'
import venus_mars from '@images/venus-mars.png'
import weightGir from '@images/weight.png'
import scaleHeight from '@images/scale.png'
import pencilIcon from '@images/pencil.png'
import trashIcon from '@images/trash.png'
import {
  useCreateGiraffeMutation,
  useRemoveGiraffeMutation,
  useUpdateGiraffeMutation
} from 'src/api/api'
import GiraffeDescription from './GiraffeDescription'
import ConfigurableField from './ConfigurableField'
import UploadImage from 'src/ui/UploadImage'

// interface GiraffeCard {
//   id: string
// }

const GiraffeCard = () => {
  const [removeGiraffe] = useRemoveGiraffeMutation()
  const [createGiraffe] = useCreateGiraffeMutation()
  const [updateGiraffe] = useUpdateGiraffeMutation()
  let state

  if (props.giraffe.name === 'Имя') {
    state = {
      editData: Object.assign({}, props.giraffe),
      isEdit: true,
      status: '',
      isNew: true,
      file: ''
    }
  } else {
    state = {
      editData: Object.assign({}, props.giraffe),
      isEdit: false,
      status: '',
      file: ''
    }
  }

  const handleFileChange = (event) => {
    const files = event.target.files

    if (event.target.files.length === 0 || event.target.files == undefined)
      return

    setState({ file: event.target.files })

    let sendFiles = async () => {
      let formData = new FormData()

      formData.append('file', files[0])

      const { data } = await axios.post('/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (data.success) {
        setState((state) => {
          return { editData: { ...state.editData, photoPath: files[0].name } }
        })
      }
    }

    sendFiles()
  }

  const handleClickSave = () => {
    if (state.isNew) {
      // createGiraffe()
    } else {
      // updateGiraffe()
    }
  }

  const handleClickEditButton = () => {
    setState({ isEdit: true })
  }

  const handleClickDeleteButton = () => {
    removeGiraffe()
  }

  const handleChangeField = (typeField, event) => {
    const value = event.target.value

    if (value.length < 12) {
      let newObj = {}

      newObj[typeField] = value

      setState((state) => {
        return { editData: { ...state.editData, ...newObj } }
      })
    }
  }

  return (
    <div className="giraffeCard">
      <div className="dws-menu">
        <a href="src/components#App.tsx">...</a>
        <div>
          <button onClick={handleClickEditButton}>
            <img src={pencilIcon} />
            <span>Редактировать</span>
          </button>
          <button onClick={handleClickDeleteButton}>
            <img src={trashIcon} />
            <span>Удалить</span>
          </button>
        </div>
      </div>
      {!state.isEdit ? (
        <img
          className="photoImg"
          src={'../../../../uploads/' + props.giraffe.photoPath}
          alt="Нет"
        />
      ) : (
        <UploadImage
          value={state.editData.photoPath}
          onChange={handleFileChange}
        />
      )}
      {!state.isEdit ? (
        <h3 className="name"> {props.giraffe.name} </h3>
      ) : (
        <input
          type="text"
          className="inputName"
          value={state.editData.name}
          onChange={handleChangeField.bind(this, 'name')}
        />
      )}
      <div id="boxIcon">
        <img src={venus_mars} alt="Пропало" />
        <img src={weightGir} alt="Пропало" />
        <img src={scaleHeight} alt="Пропало" />
      </div>
      <div id="boxChar">
        <ConfigurableField
          isEdit={state.isEdit}
          value={!state.isEdit ? props.giraffe.gender : state.editData.gender}
          onChange={handleChangeField.bind(this, 'gender')}
        />
        <ConfigurableField
          isEdit={state.isEdit}
          value={!state.isEdit ? props.giraffe.weight : state.editData.weight}
          onChange={handleChangeField.bind(this, 'weight')}
        />
        <ConfigurableField
          isEdit={state.isEdit}
          value={!state.isEdit ? props.giraffe.height : state.editData.height}
          onChange={handleChangeField.bind(this, 'height')}
        />
      </div>
      <div>
        <GiraffeDescription
          label="Цвет"
          value={!state.isEdit ? props.giraffe.color : state.editData.color}
          onChange={handleChangeField.bind(this, 'color')}
          isEdit={state.isEdit}
        />
        <GiraffeDescription
          label="Диета"
          value={!state.isEdit ? props.giraffe.diet : state.editData.diet}
          onChange={handleChangeField.bind(this, 'diet')}
          isEdit={state.isEdit}
        />
        <GiraffeDescription
          label="Характер"
          value={
            !state.isEdit ? props.giraffe.character : state.editData.character
          }
          onChange={handleChangeField.bind(this, 'character')}
          isEdit={state.isEdit}
        />
      </div>
      {state.isEdit && (
        <button className="saveButton" onClick={handleClickSave}>
          {' '}
          Coхранить{' '}
        </button>
      )}
      {state.status === '' && state.status}
    </div>
  )
}

export default GiraffeCard
