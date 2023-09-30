import React, { useEffect } from 'react'
import axios from 'axios'
import GiraffeCard from 'src/components/giraffeCard/GiraffeCard'
import { useSelector, useDispatch } from 'react-redux'

import LogComp from './LogComp'
import bellImage from '../images/bell.png'
import plusIcon from '../images/plus.png'
import avatarPhoto from '../images/Avatar.png'
import InfoTablo from './InfoTablo'
import {
  useCreateAviaryMutation,
  useAddGiraffeMutation,
  useGetListAviaryQuery
} from 'src/api/api'
import { setCurrentAviary } from 'src/components/store/slices/aviarySlice'
import { RootState } from 'src/components/store/store'

interface ContentPageProps {}

const ContentPage = ({}: ContentPageProps) => {
  const { data: aviaries = [], error, isLoading } = useGetListAviaryQuery()
  const [addNewGiraffe, result] = useAddGiraffeMutation()
  const [createNewAviary, result2] = useCreateAviaryMutation()
  const dispatch = useDispatch()
  const aviary = useSelector((state: RootState) => state.aviary)

  const handleClickOnAddGiraffe = () => {
    addNewGiraffe()
  }

  const handleChangeAviary = (id: string) => () => {
    dispatch(setCurrentAviary(id))
  }

  useEffect(() => {
    // const arrayAviary = []
    //
    // for (let i = 1; i <= response.data[0].countAviary; i++)
    //   arrayAviary.push(i)
    // // props.addAviary(arrayAviary)
    // handleChangeAviary(1)
  }, [])

  const listHeaders = aviaries.map((item) => (
    <button
      className={
        'listHeaders ' + (aviary.currentId == item.id ? 'activelistHeader' : '')
      }
      key={'Вольер' + item}
      onClick={handleChangeAviary(item.id)}
    >
      {item.name}
    </button>
  ))

  const listGiraffe = aviary.giraffes.map((item) => (
    <GiraffeCard
      key={'Aviary' + item.id}
      numAviary={aviary.currentId}
      giraffe={item}
      // handleDelete={props.deleteGiraffe}
      // handleSuccessSave={props.saveGiraffe}
    />
  ))

  const handleAddAviary = () => {
    console.log('as')
    createNewAviary()
  }

  return (
    <div className="panegiraffe">
      <div className="hat">
        <div>
          {listHeaders}
          <button className="addButton" onClick={handleAddAviary}>
            <img src={plusIcon} />
          </button>
        </div>
        <div className="accountHat">
          <img className="adMargin" src={bellImage} alt="df" />
          <img className="adMargin" src={avatarPhoto} />
          <span> hello@mail.ru </span>
        </div>
      </div>
      <hr />
      <div className="inlineBox">
        <h1> Жирафы </h1>
        <button className="addGir" onClick={handleClickOnAddGiraffe}>
          <img src={plusIcon} />
        </button>
      </div>
      <div className="giraffeBox">{listGiraffe}</div>
      {props.visibleInfo && <InfoTablo />}
      {/*{props.visibleLog && <LogComp />}*/}
    </div>
  )
}

export default ContentPage
