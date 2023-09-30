function mapStateToProps(component) {
  switch (component) {
    case 'ContentPage': {
      return function (state) {
        return {
          giraffes: [...state.giraffes],
          aviaries: [...state.aviaries],
          currentNumber: state.currentNumber,
          visibleInfo: state.visibleInfo,
          visibleLog: state.visibleLog
        }
      }
    }

    default:
      return undefined
  }
}

export default mapStateToProps
