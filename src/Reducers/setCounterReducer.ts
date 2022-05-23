

type inputMaxValueAT = {
  type: "INPUT_MAX_VALUE"
  count: number
}
type inputStartValueAT = {
  type: "INPUT_START_VALUE"
  count: number
}
type setCounterReducerAT = inputMaxValueAT | inputStartValueAT
export const setCounterReducer = (state: any, action: setCounterReducerAT) => {
  switch (action.type) {
    case "INPUT_MAX_VALUE" :
      return {...state, count: action.count}
    case "INPUT_START_VALUE" :
      return {...state, count: action.count}
    default:
      return state
  }
}
export const inputMaxValueAC = (newCount: number):inputMaxValueAT => {
  return {
    type: "INPUT_MAX_VALUE",
    count: newCount
  }
}
export const inputStartValueAC = (newCount: number):inputStartValueAT  => {
  return {
    type: "INPUT_START_VALUE",
    count: newCount
  }
}