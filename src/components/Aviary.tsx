import React from 'react'
import axios from 'axios'
import GiraffeCard from 'src/components/giraffeCard/GiraffeCard'

interface AviaryProps {}

const Aviary = ({ currentAviary }: AviaryProps) => {
  const state = {
    // giraffes:[{id : nanoid(),
    //     name: "Мотильда",
    //     gender: 'M',
    //     weight: 900,
    //     height: 350,
    //     color: 'Стандарт',
    //     diet:'Растительная',
    //     character:'Кокетка',}
    //     ],
    giraffes: []
    // editData:{}
  }

  const handleClickOnAddGiraffe = () => {
    // setState((state) => {
    //   const a = [
    //     ...state.giraffes,
    //     {
    //       id: nanoid(),
    //       name: 'Имя',
    //       gender: '-',
    //       weight: 0,
    //       height: 0,
    //       color: '',
    //       diet: '',
    //       character: '',
    //       isEdit: true,
    //       status: ''
    //     }
    //   ]
    //
    //   return {
    //     giraffes: a,
    //     editData: {
    //       id: nanoid(),
    //       name: 'Имя',
    //       gender: '-',
    //       weight: 0,
    //       height: 0,
    //       color: '',
    //       diet: '',
    //       character: '',
    //       isEdit: true,
    //       status: ''
    //     }
    //   }
    // })
  }

  const dadfsdfsdfdf = () => {
    axios
      .put(urlPath + '/api/giraffe/:id')
      .then((response) => {})
      .catch((response) => {})
  }

  const findGiraffe = (id) => {
    const giraffe = state.giraffes.filter((item) => {
      return item.id === id
    })

    console.log(giraffe)

    return giraffe
  }

  const handleSuccessSave = (obj) => {
    setState((state) => {
      const indexElem = state.giraffes.findIndex((value) => {
        return obj.id === value.id
      })

      const girArray = [...state.giraffes]

      girArray[indexElem] = { ...obj }

      return { giraffes: girArray }
    })
  }

  const handleChangeField = (typeField, id, value) => {
    switch (typeField) {
      case 'name':
        setState({ editData: { name: value } })
        break
      case 'gender':
        setState({ editData: { gender: value } })
        break
      case 'weight':
        setState({ editData: { weight: value } })
        break
      case 'height':
        setState({ editData: { height: value } })
        break
      case 'color':
        setState({ editData: { color: value } })
        break
      case 'diet':
        setState({ editData: { diet: value } })
        break
      case 'character':
        setState({ editData: { character: value } })
        break
    }
  }

  const listGiraffe = state.giraffes.map((item, index) => (
    <GiraffeCard
      key={'Aviary' + index}
      numAviary={props.currentAviary}
      giraffe={item}
      handleChangeField={handleChangeField}
      handleSuccessSave={handleSuccessSave}
    />
  ))

  return (
    <>
      <div className="inlineBox">
        <h1> Жирафы </h1>
        <button className="addButton" onClick={handleClickOnAddGiraffe}>
          +
        </button>
      </div>
      <div className="giraffeBox">{listGiraffe}</div>
    </>
  )
}

//export default connect(mapStateToProps("Aviary"), mapDispatchToProps("Aviary"))(Aviary);
